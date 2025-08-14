module.exports = {
    db: {
        path: process.env.DB_PATH || './newsletters.db'
    },
    email: {
        maxLength: 254 // RFC 5321
    },
    security: {
        rateLimitWindow: 15 * 60 * 1000, // 15 minutes
        rateLimitMax: 100
    }
};
