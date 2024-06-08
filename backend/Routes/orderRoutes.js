import express from 'express'
import orderController from '../Controllers/orderController.js'

const orderRoutes = express.Router()

orderRoutes.get('/recent', orderController.recent)
orderRoutes.post('/add', orderController.add)

export default orderRoutes
