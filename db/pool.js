const { Pool } = require('pg');

module.exports = new Pool({
  connectionString: "postgresql://marefpceo:***REMOVED******REMOVED***@localhost:5432/message_board"
});