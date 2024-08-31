const { Pool } = require('pg');

module.exports = new Pool({
  connectionString: "postgresql://marefpceo:Rosiep1!Stevens1!@localhost:5432/message_board"
});