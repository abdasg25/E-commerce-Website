import Order from '../Models/Order.js'
import Product from '../Models/Product.js'

// http://localhost:4000/api/v1/order/recent
const recent = async (req, res) => {
  try {
    // Fetch all orders from the database
    const orders = await Order.find()
      .populate('orderItems.productId')
      .populate('boughtBy')
    // Respond with the orders
    res.status(200).json({ success: true, result: orders })
  } catch (error) {
    res.status(500).json({ error: 'Server error', success: false })
  }
}

// http://localhost:4000/api/v1/order/add
const add = async (req, res) => {
  const { orderItems, price, boughtBy, address, payment } = req.body

  // Validate the required fields
  if (
    !orderItems ||
    orderItems.length === 0 ||
    !price ||
    !boughtBy ||
    !address ||
    !payment
  ) {
    return res
      .status(400)
      .json({
        success: false,
        error: 'All fields including at least one order item are required'
      })
  }

  try {
    // Validate that each product ID exists in the Product table
    const productIds = orderItems.map(item => item.productId)
    const products = await Product.find({ _id: { $in: productIds } })

    if (products.length !== productIds.length) {
      return res
        .status(400)
        .json({ success: false, error: 'One or more product IDs are invalid' })
    }

    // Check stock availability
    for (let item of orderItems) {
      const product = products.find(
        p => p._id.toString() === item.productId.toString()
      )
      if (!product || product.stock < item.quantity) {
        return res
          .status(400)
          .json({
            success: false,
            error: `Not enough stock for product ${item.productId}`
          })
      }
    }

    // Create a new order document
    const newOrder = new Order({
      orderItems,
      price,
      boughtBy,
      address,
      payment
    })

    // Save the order to the database
    const savedOrder = await newOrder.save()

    // Decrease the stock for each product in the order
    for (let item of orderItems) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.quantity }
      })
    }

    // Respond with the saved order
    res
      .status(201)
      .json({
        success: true,
        result: 'Order submitted successfully',
        order: savedOrder
      })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error', success: false })
  }
}

export default { recent, add }
