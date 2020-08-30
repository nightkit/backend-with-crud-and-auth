const ratelimit = require('express-rate-limit');

const limiter = ratelimit({
    windowMs: +process.env.RATE_LIMIT_TIME || 15 * 60 * 1000, // 15 minutes
    max: +process.env.RATE_LIMIT_THRESHOLD || 100,
    message: "Too many requests from this IP, please check back later."
});

module.exports = limiter;