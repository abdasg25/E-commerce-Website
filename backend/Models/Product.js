import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  // productId: {
  //   type: Number,
  //   required: true,
  //   unique: true
  // },
  title:{
    type: String,
  },
  image:{
    type: String,
  
  },
  previews:[
    {
      previewUrl:{
        type: String,
      },
      thumbUrl:{
        type: String,
      
      }
    }
  ],
  rating:{
      type:Number,
      required:true,
      default:0
  },
  rateCount:{
    type:Number,
    required:true,
      default:0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  stock: {
    type: Number,
    required: true
  },
  size: [
    {
      type: String,
      enum: ['Small', 'Medium', 'Large', 'XLarge']
    }
  ],
  discount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['Male', 'Female', 'Children'],
    required: true
  }
})

const Product = mongoose.model('Product', productSchema)
export default Product