import User from '../Models/User.js'
import Order from '../Models/Order.js'
import bcryptjs from 'bcryptjs'
import nodemailer from 'nodemailer'
import jsonwebtoken from 'jsonwebtoken'
import crypto from 'crypto'

const saveVerificationToken = async (userId, verificationToken) => {
  await User.findOneAndUpdate(
    { _id: userId },
    {
      token: verificationToken.token,
      tokenExpires: verificationToken.expires
    }
  )
}

const generateVerificationToken = () => {
  const token = crypto.randomBytes(64).toString('hex')
  const expires = Date.now() + 2 * 24 * 60 * 60 * 1000 // 2 days from now
  return {
    token: token,
    expires: new Date(expires) // Convert to Date object
  }
}

// sendVerificationMail
const sendVerificationEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.NODEMAILER_PORT,
    secure: false,
    service: process.env.SERVICE,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Verify your email address',
    text: `Please click the following link to verify your email address: http://localhost:3000/ecommerence/verifyUser/${token}`,
    html: `<p>Please click this link to verify your account:</p> <a href="http://localhost:3000/ecommerence/verifyUser/${token}">Verify</a><br>Regards<br>Team Abdul Shoping System`
  }

  return await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error)
      return false
    } else {
      console.log('Email sent:', info.response)
      return true
    }
  })
}

// http://localhost:4000/api/v1/user/signup
const signup = async (req, res) => {
  const { cnic, username, email, password } = req.body
  const alreadyExistUsername = await User.findOne({ username })
  const alreadyExistEmail = await User.findOne({ email })
  const alreadyExistCnic = await User.findOne({ cnic })

  if (alreadyExistUsername || alreadyExistEmail || alreadyExistCnic) {
    return res.status(400).json({
      message: 'username, cnic, or email already exists',
      success: false
    })
  } else {
    try {
      const verificationToken = generateVerificationToken()
      await sendVerificationEmail(email, verificationToken.token)
      const hashed_password = await bcryptjs.hash(password, 10)
      const userDetails = await User.create({
        email: email,
        name: username,
        password: hashed_password,
        cnic: cnic
      })

      await saveVerificationToken(userDetails._id, verificationToken)

      return res
        .status(200)
        .json({ message: 'User added successfully', success: true })
    } catch (error) {
      return res.status(500).json({
        message: 'Error here',
        errors: [error.message],
        success: false
      })
    }
  }
}

// http://localhost:4000/api/v1/user/login
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
            role: auth_user.role
          })
        }
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// http://localhost:4000/api/v1/user/histroy
const histroy = async (req, res) => {
  try {
    const { token } = req.body
    if (!token) {
      return res
        .status(400)
        .json({ message: 'Token is required', success: false })
    }
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET)
    const userId = decoded.auth_user._id
    const orderById = await Order.find({ boughtBy: userId }).populate(
      'orderItems.productId'
    )
    res.status(200).json({ success: true, result: orderById })
  } catch (error) {
    res.status(500).json({ error: 'Server error', success: false })
  }
}

// http://localhost:4000/api/v1/user/verifyUser
const verifyUser = async (req, res) => {
  const token = req.body.token;
  try {
    // Find and update the user if the verification token is valid and not expired
    const verifiedUser = await User.findOneAndUpdate(
      {
        "token": token,
        "tokenExpires": { $gt: Date.now() },
      },
      {
        isActive: true,
        "token": null,
      },
    );
    // Check if user was found and updated
    if (verifiedUser) {
      return res.status(200).json({ message: "Account verified", success: true });
    } else {
      // If no user was found or token is invalid/expired
      return res.status(401).json({ message: "Invalid or expired verification token", success: false });
    }
  } catch (error) {
    console.error("Error verifying account:", error);
    return res.status(500).json({ message: "Error verifying account", success: false });
  }
};

export default { login, signup, histroy, verifyUser }
