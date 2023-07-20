var express = require('express');
var router = express.Router();
var sql = require("mysql");
var app = express();
var conn = require("../connection/connect")

//show all Users
router.get('/api/Users',(req, res) => {
    let sql = "SELECT * FROM users";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
    });
  });

//add new User
router.post('/api/User',(req, res) => {
    let data = {name: req.query.name, country: req.query.country, number: req.query.number};
    let sql = "INSERT INTO users SET ?";
    let query = conn.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
    });
  });
   
  //update User
  router.put('/api/User/:id',(req, res) => { 
    let sql = "UPDATE users SET name='"+req.query.name+"', country='"+req.query.country+"', number='"+req.query.number+"' WHERE id="+req.params.id;
    let query = conn.query(sql, (err, results) => {
      //  console.log(req.query)
      if(err) throw err;
      res.send(JSON.stringify(results));
    });
  });
   
  //Delete User
  router.delete('/api/User/:id',(req, res) => {
    let sql = "DELETE FROM users WHERE id="+req.params.id;
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
        res.send(JSON.stringify(results));
    });
  });
  
  //show single User
  router.get('/api/User/:id',(req, res) => {
    let sql = "SELECT * FROM users WHERE id="+req.params.id;
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
    });
  });

  module.exports = router;