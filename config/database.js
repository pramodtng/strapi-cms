// path: ./config/database.js

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'tashielectronics_db'),
//       user: env('DATABASE_USERNAME', 't@$h1_electronics'),
//       password: env('DATABASE_PASSWORD', '43fd9de*9z'),
//       // ssl: {
//       //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//       // },
//     },
//     useNullAsDefault: true, 
//     debug: false,
//   },
// });


// path: ./config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    useNullAsDefault: true,
    debug: false,
  },
});
