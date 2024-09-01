require('dotenv').config();
const { Pool } = require('pg');

module.exports = new Pool({
  connectionString: process.env.POSTGRESQL_URI || "postgresql://marefpceo:Rosiep1!@localhost:5432/message_board"
});