const { createPool } = require("mysql2");

const pool = createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "***********",
    database: "demodb",
});

module.exports  = pool;

