const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "root", // your username
    password: process.env.DB_PASSWORD, // your password
    database: "code-mission", // your database name
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "code-mission",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "code-mission",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  }
};
