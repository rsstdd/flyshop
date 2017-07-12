export default {
  env: 'development',
  port: 4000,
  mongo: {
    url: 'mongodb://localhost:27017/check-in-api'
  },
  stripe: {
    secretKey: 'sk-asdf',
    publicKey: 'pk-qwer'
  }
}

