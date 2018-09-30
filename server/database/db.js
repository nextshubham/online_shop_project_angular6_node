var mongo = require('mongodb');

var dbObj = {};

dbObj.getConnection = function(cb) {
  var mongoClient = mongo.MongoClient;
  debugger;
  var url =
    'mongodb+srv://chenchala:chenchala@cluster0-wxjhe.mongodb.net/test?retryWrites=true';
  mongoClient.connect(
    url,
    function(err, client) {
      debugger;
      var dbObj = client.db('onlineshopping');
      cb(dbObj);
    }
  );
};

module.exports = dbObj;
