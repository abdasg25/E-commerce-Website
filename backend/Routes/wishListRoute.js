import express from 'express'
import wishListController from '../Controllers/wishListController.js'
import userAuth from '../Middlewares/authMiddleware.js'


const wishListRoutes = express.Router()

wishListRoutes.get('/get', userAuth, wishListController.get)
wishListRoutes.post('/add', userAuth, wishListController.add)
wishListRoutes.patch('/remove', userAuth, wishListController.remove)

export default wishListRoutes
