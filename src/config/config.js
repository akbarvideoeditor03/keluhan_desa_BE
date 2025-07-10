require("dotenv").config()
const config = {
    development: {
        username: process.env.APP_USERNAME,
        password: process.env.APP_PASSWORD,
        database: process.env.APP_DB,
        host: process.env.APP_HOST,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    },
    production: {
        username: process.env.APP_USERNAME,
        password: process.env.APP_PASSWORD,
        database: process.env.APP_DB,
        host: process.env.APP_HOST,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    },
}

module.exports = config;