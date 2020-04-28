var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.getCritEventsList = function (callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("getCritEventsList DAO");
        var dbo = db.db("critSit");
        //Find the first document in the customers collection:
        dbo.collection("critEvent").find({},{}).toArray(function (err, result) {
            if (err) {
                throw err;
                callback(err);
            }

            console.log(result);
            db.close();
            callback(err, result);
        })
    });

}


exports.createCritEvent = function (req, callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("createParty DAO");
        var dbo = db.db("critSit");
        var obj = req;
        console.log(obj);
        dbo.collection("critEvent").insertOne(obj, function (err, result) {
            if (err) callback(err);

            console.log("Inserted " + obj.partyId);
            db.close();
            callback(err, result);
        })

    })
}
