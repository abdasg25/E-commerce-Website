import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
// import { PORT } from '../Constant/Constant.js'
import connectToMongo from '../DatabaseConnection/index.js'
import ErrorMiddleWare from '../Middlewares/ErrorMiddleware.js'

dotenv.config({path: "../.env"});
const app = express()
app.use(cors())
app.use(express.json())

import userRoute from '../Routes/UserRoutes.js'
import productRoute from '../Routes/productRoutes.js'
import orderRoute from '../Routes/orderRoutes.js'
import wishListRoute from '../Routes/wishListRoute.js'

app.use('/api/v1/user', userRoute)
app.use('/api/v1/product', productRoute)
app.use('/api/v1/order', orderRoute)
app.use('/api/v1/wishList', wishListRoute)
app.use(ErrorMiddleWare)

connectToMongo()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT}`)
    })
  })
  .catch(err => {
    console.log('Error occurred during Database connection. Error is: ', err)
  }) 