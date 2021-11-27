const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'simpledb',
    port: 3307
});

// check database connection
db.connect(err => {
    if (err) {
        console.log(err, 'dberr');
    }
    console.log('Database connected');
});

//  get all database
app.get('/user', (req, res) => {
    console.log('get all user');
});




app.listen(3000, () => {
  console.log('Server running on port 3000');
});
