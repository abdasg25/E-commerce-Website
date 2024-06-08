import express from 'express'
import userController from '../Controllers/userController.js'

const userRoutes = express.Router()

userRoutes.post('/login', userController.login) 
userRoutes.post('/signup', userController.signup)
userRoutes.get('/histroy', userController.histroy)
userRoutes.post('/verifyUser', userController.verifyUser)

export default userRoutes
