// =====================================================
// connection.js
// =====================================================
const Mysql = require("mysql");

// connection configuration
let config;

// db connection config using JawsDB
if (process.env.JAWSDB_URL) {
	config = process.env.JAWSDB_URL;
}
else {
	// default db config for local db
	config = {
		host: "gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "w06ch16eegzl4f6r",
		password: "g5960uxrua31k7xl",
		database: "burgers_db"
	};
}

// export connection to burgers_db
module.exports = Mysql.createConnection(config);