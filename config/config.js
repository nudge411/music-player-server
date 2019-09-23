const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "nudge411", // your username
    password: process.env.DB_PASSWORD, // your password
    database: "musicplayermission", // your database name
    host: "musicplayermission.cnetgtmn8zrm.ap-northeast-2.rds.amazonaws.com",
    port: "33811",
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: "nudge411",
    password: process.env.DB_PASSWORD,
    database: "musicplayermission",
    host: "musicplayermission.cnetgtmn8zrm.ap-northeast-2.rds.amazonaws.com",
    port: "33811",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: "nudge411",
    password: process.env.DB_PASSWORD,
    database: "musicplayermission",
    host: "musicplayermission.cnetgtmn8zrm.ap-northeast-2.rds.amazonaws.com",
    port: "33811",
    dialect: "mysql",
    operatorsAliases: false
  }
};
