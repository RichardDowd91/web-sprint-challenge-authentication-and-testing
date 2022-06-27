const jwt = require('jsonwebtoken')
const {SECRET_TOKEN } = require('../config');

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token,SECRET_TOKEN, (err, decoded) => {
      if (err) {
        next({ status: 401, message: `token invalid` })
      } else {
        req.decodedJwt = decoded;
        next()
      }
    })
  } else {
    next({ status: 401, message: 'token required' })
  }
}

module.exports = {
  restricted,
};
