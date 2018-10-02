var express = require('express');
var router = express.Router();
var dbObj = require('../database/db');

/* Gt users list */
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

/* Insert Users */
router.post('/register', function(req, res, next) {
  dbObj.getConnection(function(database) {
    debugger;
    var data = req.body.query;
    database.collection('users').insertOne(data, function(e, r) {
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
