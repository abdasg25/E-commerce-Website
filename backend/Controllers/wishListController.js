import User from '../Models/User.js';
import Product from '../Models/Product.js';
import jsonwebtoken from 'jsonwebtoken';

// http://localhost:4000/api/v1/wishList/get
const get = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    const userId = decoded.auth_user._id;
    const user = await User.findById(userId).populate('wishList');
    
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, wishList: user.wishList });
  } catch (error) {
    console.error(error);
    next('Server Error while fetching wishlist');
  }
};

// http://localhost:4000/api/v1/wishList/add
const add = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const token = req.headers.authorization;
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    const userId = decoded.auth_user._id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    if (user.wishList.includes(productId)) {
      return res.status(400).json({ success: false, message: 'Product already in wishlist' });
    }

    user.wishList.push(productId);
    await user.save();

    res.status(200).json({ success: true, wishList: user.wishList });
  } catch (error) {
    console.error(error);
    next('Server Error while adding to wishlist');
  }
};

// http://localhost:4000/api/v1/wishList/remove
const remove = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const token = req.headers.authorization;
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    const userId = decoded.auth_user._id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const productIndex = user.wishList.indexOf(productId);
    if (productIndex === -1) {
      return res.status(404).json({ success: false, message: 'Product not in wishlist' });
    }

    user.wishList.splice(productIndex, 1);
    await user.save();

    res.status(200).json({ success: true, wishList: user.wishList });
  } catch (error) {
    console.error(error);
    next('Server Error while removing from wishlist');
  }
};

export default { add, get, remove };
