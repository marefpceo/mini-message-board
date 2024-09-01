require('dotenv').config();
const { Pool } = require('pg');

module.exports = new Pool({
  connectionString: process.env.POSTGRESQL_URI || "postgresql://marefpceo:***REMOVED***@localhost:5432/message_board"
});