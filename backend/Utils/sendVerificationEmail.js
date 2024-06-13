import nodemailer from 'nodemailer'
import { configDotenv } from 'dotenv'

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
        next('Error occur while sending mail')
        return false
      } else {
        // console.log('Email sent:', info.response)
        return true
      }
    })
  }

export default sendVerificationEmail