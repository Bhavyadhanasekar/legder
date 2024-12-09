// const mysql = require('mysql2');

// // Create MySQL connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Doitnow', // Replace with your MySQL password
//     database: 'cams'
// });

// // Connect to the database
// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('MySQL Connected...');
// });

// module.exports = db;




// db/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',    
    user: 'root',         
    password: 'Doitnow', 
    database: 'ledger' 
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to the database');
});

module.exports = db;
