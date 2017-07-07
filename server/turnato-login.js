const jwt    = require('jsonwebtoken');
const crypto = require('crypto');
const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET ||
       'zwxnizRjZ99hLsgris6k';

var getLoggedUser = (jwt_token) => {
  try {
    var user = jwt.verify(jwt_token, JWT_TOKEN_SECRET);
    console.log('LOGIN SUCCESS');
    return user
  } catch (err) {
    console.log('LOGIN ERROR');
    return null
  }
}

var hashPassword = (pwd) => {
  var saltedPassword = 'turnato_sault_'+pwd;
  return crypto.createHash('sha256').update(saltedPassword).digest('base64');
};

var jwtTokenize = (payload) => {
  return jwt.sign(payload, JWT_TOKEN_SECRET, {
    expiresIn: 60*60*24*365
  });
};

module.exports = {hashPassword, jwtTokenize, getLoggedUser};
