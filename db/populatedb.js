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
  ('Armando', 'Test message generated using populatedb script'),
  ('John', 'Welcome Armando, I am John.');
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
