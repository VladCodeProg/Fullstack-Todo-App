const Pool = require('pg').Pool;
const pool = new Pool({
    user: // postgres
    password: // your postgres password
    host: // localhost
    port: // postgres port, usually is 5432
    database: // your database name
});

module.exports = pool