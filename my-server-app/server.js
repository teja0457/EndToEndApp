const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const url = require('url');
const mySql = require('mysql');
const cors = require('cors');

const port = process.env.port || 3000;

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const connection = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'sakila'
})

connection.connect(function (error) {
  if (!!error) {
    console.log('Error in Console');
  } else {
    console.log('Connection Sucess')
  }
})

app.get('/', function (req, resp) {
  connection.query('SELECT * FROM actor', function (err, rows, fields) {
    if (err) {
      console.log('Error in Query');
    } else {
      console.log('Query Sucess');
      resp.send(rows);
    }

  })

})


app.listen(port);