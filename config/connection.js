const Sequelize = require('sequelize');
require('dotenv').config();
// mySql connection
// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD, {
//         host: process.env.DB_SERVERNAME,
//         dialect: 'mysql',
//         port: 3306,
//     }
// );

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;