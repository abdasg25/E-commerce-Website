import express from 'express'
import productController from '../Controllers/productController.js'

const productRoutes = express.Router()

productRoutes.get('/', productController.allProducts)
productRoutes.get('/category/:category', productController.category)
productRoutes.get('/size/:size', productController.filterBySize)
productRoutes.get('/filterByPrice', productController.filterByPrice)
productRoutes.post('/add', productController.add)

export default productRoutes
