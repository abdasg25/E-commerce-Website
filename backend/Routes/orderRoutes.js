import express from 'express'
import orderController from '../Controllers/orderController.js'
import userAuth from '../Middlewares/authMiddleware.js'

const orderRoutes = express.Router()

orderRoutes.get('/recent', userAuth, orderController.recent)
orderRoutes.post('/add', userAuth, orderController.add)

export default orderRoutes
