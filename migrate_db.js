const mysql = require('mysql2/promise');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const dbConfig = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT || 4000,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    ssl: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
    },
    multipleStatements: true // Crucial for running a full schema file
};

async function migrate() {
    console.log('🚀 Starting Database Migration...');
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('✅ Connected to database.');

        const schemaFile = path.join(__dirname, 'dishdash_new_schema.sql');
        const sql = fs.readFileSync(schemaFile, 'utf8');
        
        console.log('⏳ Executing schema statements...');
        await connection.query(sql);
        
        console.log('✨ Migration Complete! Your database is now ready.');
        await connection.end();
    } catch (err) {
        console.error('❌ Migration Failed:', err.message);
        process.exit(1);
    }
}

migrate();
