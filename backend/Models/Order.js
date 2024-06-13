import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: {
    type: Number,
    required: true
  }
})

const orderSchema = new mongoose.Schema(
  {
    orderItems: {
      type: [orderItemSchema]
    },
    price: {
      type: Number,
      required: true
    },
    boughtBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    address: {
      type: String,
      required: true
    },
    payment: {
      type: String,
      enum: ['online', 'cash'],
      required: true
    },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Delivered'],
      default: 'Pending'
    }
  },
  {
    timestamps: true
  }
)

const Order = mongoose.model('Order', orderSchema)
export default Order
