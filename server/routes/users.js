var express = require('express');
var router = express.Router();
var dbObj = require('../database/db');

/* GET users listing. */
router.post('/login', function(req, res, next) {
  dbObj.getConnection(function(database) {
    var query = req.body.query;
    database
      .collection('users')
      .find(query)
      .toArray(function(e, r) {
        if (e) {
          res.send(e);
        } else {
          res.send(r);
        }
      });
  });
});

router.post('/insert', function(req, res, next) {
  dbObj.getConnection(function(database) {
    var obj = {
      userName: 'vendor',
      password: 'vendor',
      phone: '100',
      role: 'vendor',
      email: 'vendor@gmail.com',
      orders: []
    };
    database.collection('users').insertOne(obj, function(e, r) {
      if (e) {
        res.send(e);
      } else {
        res.send(r);
      }
    });
  });
});

router.post('/delete', function(req, res, next) {
  dbObj.getConnection(function(database) {
    var obj = {
      password: 'admin'
    };
    database.collection('users').deleteOne(obj, function(e, r) {
      if (e) {
        res.send(e);
      } else {
        res.send(r);
      }
    });
  });
});

module.exports = router;
