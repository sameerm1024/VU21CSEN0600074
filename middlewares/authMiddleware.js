const config = require('../config');
const authMiddleware = (req, res, next) => {
    req.headers.Authorization = `Bearer ${process.env.BEARER_TOKEN}`;
    next();
};

module.exports = authMiddleware;
