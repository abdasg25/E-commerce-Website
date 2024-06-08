import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PORT } from '../Constant/Constant.js'
import connectToMongo from '../DatabaseConnection/index.js'
import ErrorMiddleWare from '../Middlewares/ErrorMiddleware.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

import userRoute from '../Routes/userRoutes.js'
import productRoute from '../Routes/productRoutes.js'
import orderRoute from '../Routes/orderRoutes.js'

app.use('/api/v1/user', userRoute)
app.use('/api/v1/product', productRoute)
app.use('/api/v1/order', orderRoute)
app.use(ErrorMiddleWare)

connectToMongo()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`)
    })
  })
  .catch(err => {
    console.log('Error occurred during Database connection. Error is: ', err)
  })
