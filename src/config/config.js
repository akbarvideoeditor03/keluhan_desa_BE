require("dotenv").config()
const config = {
    development: {
        username: 'neondb_owner',
        password: 'npg_jbUCq3R0nhuJ',
        database: 'keluhan_desa',
        host: 'ep-lucky-leaf-a10zl0sc-pooler.ap-southeast-1.aws.neon.tech',
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
        // username: process.env.APP_USERNAME,
        // password: process.env.APP_PASSWORD,
        // database: process.env.APP_DB,
        // host: process.env.APP_HOST,
        // dialect: "postgres",
        // dialectOptions: {
        //     ssl: {
        //         require: true,
        //         rejectUnauthorized: false
        //     }
        // }
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