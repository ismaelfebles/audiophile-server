import dotenv from 'dotenv'

dotenv.config()

export default {
  api: {
    port: process.env.PORT || 3000
  }
}
