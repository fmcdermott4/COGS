const Sequelize = require('sequelize');
require('dotenv').config();

// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD, {
//         host: 'arcimsdbsql-production.database.windows.net',
//         dialect: 'mssql',
//         pool: {
//             max: 5,
//             min: 0,
//             idle: 10000
//         },
//         dialectOptions: {
//             encrypt: true
//         }
//     });
// var connection = new ActiveXObject("ADODB.Connection");
// var connectionstring = "Data Source=arcimsdbsql-production.database.windows.net;Initial Catalog=ARCIMS-Production;User ID=arcadmin;Password=Datacomm1!22;Provider = SQLOLEDB ";
// connection.Open(connectionstring);
// var rs = new ActiveXObject("ADODB.Recordset");

// rs.Open("SELECT * FROM amazonamm2", connection);
// rs.MoveFirst
// while (!rs.eof) {
//     document.write(rs.fields(1));
//     rs.movenext;
// }

// rs.close;
// connection.close;

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: process.env.DB_SERVERNAME,
        dialect: 'mysql',
        port: 3306,
    }
);

module.exports = sequelize;