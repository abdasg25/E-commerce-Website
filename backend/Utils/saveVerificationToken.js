import User from '../Models/User.js'

const saveVerificationToken = async (userId, verificationToken) => {
    await User.findOneAndUpdate(
      { _id: userId },
      {
        token: verificationToken.token,
        tokenExpires: verificationToken.expires
      }
    )
  }


export default saveVerificationToken