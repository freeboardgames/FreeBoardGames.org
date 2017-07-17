const jwt    = require('jsonwebtoken');
const crypto = require('crypto');
const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET ||
       'zwxnizRjZ99hLsgris7k';

var getLoggedUser = (jwt_token) => {
  try {
    var user = jwt.verify(jwt_token, JWT_TOKEN_SECRET);
    return user
  } catch (err) {
    return null
  }
}

var jwtTokenize = (payload) => {
  return jwt.sign(payload, JWT_TOKEN_SECRET, {
    expiresIn: 60*60*24*365
  });
};

module.exports = {jwtTokenize, getLoggedUser};
