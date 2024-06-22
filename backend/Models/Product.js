import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  // productId: {
  //   type: Number,
  //   required: true,
  //   unique: true
  // },
  title: {
    type: String,
  },
  image: {
    type: String,

  },
  // previews: [{
  //   previewUrl: {
  //     type: String,
  //   },
  // }
  // ],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  rateCount: {
    type: String,
    required: true,
    default: 0
  },
  price: {
    type: String,
    required: true,
    default: 0
  },
  stock: {
    type: String,
    required: true
  },
  shipping:{
    type: String,
    required: true,
    default:0
  },
  size: [
    {
      type: String,
      enum: ['Small', 'Medium', 'Large', 'XLarge']
    }
  ],
  discount: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Male', 'Female', 'Children'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  real:{
    type:String,
    required:true
  }
})

const Product = mongoose.model('Product', productSchema)
export default Product