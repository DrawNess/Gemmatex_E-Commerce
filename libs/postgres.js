const { Client } = require('pg');
async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Jam76588594',
    database: 'GEMMATEX_CATALOGO'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
