const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function migrate() {
    const config = {
        host: process.env.MYSQL_HOST || 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
        port: process.env.MYSQL_PORT || 4000,
        user: process.env.MYSQL_USER || 'khushikakade.root',
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE || 'test',
        ssl: {
            rejectUnauthorized: false
        },
        multipleStatements: true
    };

    if (!config.password) {
        console.error('❌ Error: MYSQL_PASSWORD is not set in .env file.');
        process.exit(1);
    }

    console.log(`🚀 Connecting to TiDB Cloud at ${config.host}...`);

    let connection;
    try {
        connection = await mysql.createConnection(config);
        console.log('✅ Connected to TiDB Cloud!');

        const sqlPath = path.join(__dirname, 'dishdash_new_schema.sql');
        console.log(`Reading SQL file: ${sqlPath}...`);
        const sql = fs.readFileSync(sqlPath, 'utf8');

        console.log('Executing migration (this may take a few seconds)...');
        await connection.query(sql);
        
        console.log('✅ Database migration successful!');
    } catch (err) {
        console.error('❌ Migration failed:', err.message);
    } finally {
        if (connection) await connection.end();
    }
}

migrate();
