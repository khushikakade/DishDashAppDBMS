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

async function showMonitor() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        
        console.clear();
        console.log('\x1b[36m%s\x1b[0m', '--- 📡 DISHDASH LIVE DATABASE MONITOR ---');
        console.log('\x1b[2m%s\x1b[0m', '(Updating every 2 seconds)');
        console.log('');

        // 1. Fetch Latest Users
        const [users] = await connection.query('SELECT user_id, name, email FROM users ORDER BY user_id DESC LIMIT 5');
        console.log('\x1b[33m%s\x1b[0m', '👤 LATEST REGISTERED USERS:');
        console.table(users);

        console.log('');

        // 2. Fetch Latest Favorites
        const [favs] = await connection.query(`
            SELECT f.fav_id, u.name as user, p.product_name as product, f.created_at 
            FROM favorites f
            JOIN users u ON f.user_id = u.user_id
            JOIN products p ON f.product_id = p.product_id
            ORDER BY f.fav_id DESC LIMIT 5
        `);
        console.log('\x1b[35m%s\x1b[0m', '❤️ LATEST FAVORITE PRODUCTS:');
        console.table(favs);

        await connection.end();
    } catch (err) {
        console.error('❌ Monitor Error:', err.message);
    }
}

// Run every 2 seconds
setInterval(showMonitor, 2000);
console.log('Starting Live Monitor...');
showMonitor();
