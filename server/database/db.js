var mongo = require('mongodb');

var dbObj = {};

dbObj.getConnection = function(cb) {
  var mongoClient = mongo.MongoClient;
  debugger;
  var url =
    'mongodb://nextshubham:Hello%40123@cluster0-shard-00-00-r468p.mongodb.net:27017,cluster0-shard-00-01-r468p.mongodb.net:27017,cluster0-shard-00-02-r468p.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
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
