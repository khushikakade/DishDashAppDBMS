const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT || 4000,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    ssl: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
    }
};

async function runSQL() {
    const query = process.argv.slice(2).join(' ');
    
    if (!query) {
        console.log('\x1b[33m%s\x1b[0m', 'Usage: node sql.js "SELECT * FROM users"');
        process.exit(0);
    }

    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('\x1b[2m%s\x1b[0m', `📡 Executing: ${query}`);
        
        const [rows] = await connection.query(query);
        
        if (Array.isArray(rows) && rows.length > 0) {
            console.table(rows);
        } else {
            console.log('✅ Query executed successfully. Results:', rows);
        }
        
        await connection.end();
    } catch (err) {
        console.error('\x1b[31m%s\x1b[0m', ` SQL Error: ${err.message}`);
    }
}

runSQL();
