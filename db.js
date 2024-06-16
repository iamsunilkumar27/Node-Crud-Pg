const { Pool } = require('pg');
require('dotenv').config();

const client = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// console.log(process.env.DB_USER, 'hello');
// pool.on('connect', () => {
//   console.log('Connected to the database');
// });


// client.connect()
//   .then(() => {
//     console.log('Connected to PostgreSQL database!');
//     // Execute SQL command to create a table
//     return client.query(`
//   SELECT * from student
//     `);
//   })
//   .then((data) => {
//     // console.log('Table created successfully!', data.rows);
//   })
//   .catch((err) => {
//     // Log any errors that occur during the connection or query execution
//     console.error('Error creating table:', err.stack);
//   })
//   .finally(() => {
//     // Close the client connection
//     client.end();
//   });

// client.on('error', (err) => {
//   console.log(err, 'error');
//   process.exit(-1);
// })


module.exports = client;

