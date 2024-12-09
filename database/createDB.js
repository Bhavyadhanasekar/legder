const mysql = require('mysql2');

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Doitnow', // Replace with your MySQL password
});

// Connect and create the database
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');

    // Create the database if it doesn't exist
    db.query('CREATE DATABASE IF NOT EXISTS ledger', (err, result) => {
        if (err) throw err;
        console.log('Database created or already exists');

        // Close the connection only after the query is complete
        db.end((err) => {
            if (err) throw err;
            console.log('MySQL Connection Closed');
        });
    });
});
