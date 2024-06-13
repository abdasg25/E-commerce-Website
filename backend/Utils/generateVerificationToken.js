import crypto from 'crypto'

const generateVerificationToken = () => {
    const token = crypto.randomBytes(64).toString('hex')
    const expires = Date.now() + 2 * 24 * 60 * 60 * 1000 // 2 days from now
    return {
      token: token,
      expires: new Date(expires) // Convert to Date object
    }
  }

export default generateVerificationToken