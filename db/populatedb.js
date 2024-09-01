#! /usr/bin/env node
require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR ( 255 ),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message)
VALUES
  ('Welcome User', 'Welcome to the Mini Message Board'),
  ('Create Message', 'Select the "Create New Message" icon above to leave a message');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.POSTGRESQL_URI
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
