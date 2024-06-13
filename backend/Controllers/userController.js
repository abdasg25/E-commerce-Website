// importing modules
import User from '../Models/User.js'
import Order from '../Models/Order.js'
import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'

//importing files
import generateVerificationToken from '../Utils/generateVerificationToken.js'
import saveVerificationToken from '../Utils/saveVerificationToken.js'
import sendVerificationEmail from '../Utils/sendVerificationEmail.js'


// http://localhost:4000/api/v1/user/signup TYPE:POST
const signup = async (req, res, next) => {
  const {username, email, password } = req.body
  if (!username || !email || !password){
    next("Not Data")
  }
  const alreadyExistUsername = await User.findOne({ username })
  const alreadyExistEmail = await User.findOne({ email })

  if (alreadyExistUsername || alreadyExistEmail) {
    next('User already exist')
  } else {
    try {
      const verificationToken = generateVerificationToken()
      await sendVerificationEmail(email, verificationToken.token)
      const hashed_password = await bcryptjs.hash(password, 10)
      const userDetails = await User.create({
        email: email,
        name: username,
        password: hashed_password,
      })

      await saveVerificationToken(userDetails._id, verificationToken)

      return res
        .status(200)
        .json({ message: 'User added successfully', success: true })
    } catch (error) {
      next('Server Error while signup')
    }
  }
}

// http://localhost:4000/api/v1/user/login   TYPE:POST

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email | !password) {
      return res.status(202).json({ message: 'Incomplete content' })
    } else {
      const auth_user = await User.findOne({ email })
      if (!auth_user) {
        return res
          .status(401)
          .json({ message: `User with ${email} not found`, success: false })
      } else if (auth_user.isActive === false) {
        return res.status(401).json({
          message: `user with ${email} is not activated`,
          success: false
        })
      } else {
        const verify = await bcryptjs.compare(password, auth_user.password)
        if (!verify) {
          return res
            .status(401)
            .json({ message: 'Email or Password incorrect', success: false })
        } else {
          auth_user.password = undefined
          const success = true
          const token = jsonwebtoken.sign(
            { auth_user },
            process.env.JWT_SECRET,
            { expiresIn: '10h' }
          )
          res.cookie('authorization', `Bearer ${token}`)

          // const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET)
          // console.log('Decoded token data:', decoded.auth_user)

          return res.status(200).json({
            token: `Bearer ${token}`,
            message: 'login successfully',
            success,
            userId: auth_user._id,
            role:auth_user.role
          })
        }
      }
    }
  } catch (error) {
    next('Server Error while signin')
  }
}

// http://localhost:4000/api/v1/user/histroy TYPE:GET
const histroy = async (req, res) => {
  try {
    const token = req.headers.authorization
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET)
    const userId = decoded.auth_user._id
    const orderById = await Order.find({ boughtBy: userId }).populate(
      'orderItems.productId'
    )
    res.status(200).json({ success: true, result: orderById })
  } catch (error) {
    next('Server Error while fetching histroy')
  }
}

// http://localhost:4000/api/v1/user/verifyUser
const verifyUser = async (req, res) => {
  const token = req.body.token
  try {
    // Find and update the user if the verification token is valid and not expired
    const verifiedUser = await User.findOneAndUpdate(
      {
        token: token,
        tokenExpires: { $gt: Date.now() }
      },
      {
        isActive: true,
        token: null
      }
    )
    // Check if user was found and updated
    if (verifiedUser) {
      return res
        .status(200)
        .json({ message: 'Account verified', success: true })
    } else {
      // If no user was found or token is invalid/expired
      return res
        .status(401)
        .json({
          message: 'Invalid or expired verification token',
          success: false
        })
    }
  } catch (error) {
    console.error('Error verifying account:', error)
    next('Server Error while verfing account')
  }
}

export default { login, signup, histroy, verifyUser }
