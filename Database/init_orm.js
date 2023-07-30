require('dotenv').config();
const { Sequelize, Model, DataTypes } = require("sequelize");

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
	dialect: 'postgres',
	host: PGHOST,
	schema: 'public',
	dialectOptions: {
		application_name: ENDPOINT_ID,
		ssl: {
			require: true,
			rejectUnauthorized: false,
		}
	}
});


module.exports = { sequelize };
