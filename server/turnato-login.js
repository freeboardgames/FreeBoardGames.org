const jwt    = require('jsonwebtoken');
const secrets = require('./secrets.js');
const JWT_TOKEN_SECRET = secrets.jwt_token_secret || 'create secrets.js';

var getLoggedUser = (jwt_token) => {
    try {
        var user = jwt.verify(jwt_token, JWT_TOKEN_SECRET);
        return user;
    } catch (err) {
        return null;
    }
};

var jwtTokenize = (payload) => {
    return jwt.sign(payload, JWT_TOKEN_SECRET, {
        expiresIn: 60*60*24*365
    });
};

module.exports = {jwtTokenize, getLoggedUser};
