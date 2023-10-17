require('dotenv').config();
const Seq = require('sequelize');

// building an sequelize connection pool
const seqEnv = new Seq(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASS,
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = seqEnv;