module.exports = {
    SECRET_TOKEN: process.env.SECRET_TOKEN || 'shh',
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env || 9000, 
}