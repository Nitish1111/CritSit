var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.getTeams = function (callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("getEmployeeData DAO");
        var dbo = db.db("critSit");
        //Find the first document in the customers collection:
        dbo.collection("teams").find({}, {}).toArray(function (err, result) {
            if (err) {
                callback(err);
            }

            console.log(result);
            db.close();
            callback(err, result);
        })
    });

}

exports.insertEmployee = function(req,callback){
    MongoClient.connect(url,function(err,db){
        if (err) throw err;
        console.log("insertEmployee DAO");
        var dbo = db.db("Employee");
        var obj = req;
        console.log(obj);
        dbo.collection("EmployeeData").insertOne(obj,function(err,result){
            if(err) callback(err);

            console.log("Inserted "+obj.name);
            db.close();
            callback(err,result);
        })

    })
}

exports.createParty = function(req,callback){
    MongoClient.connect(url,function(err,db){
        if (err) throw err;
        console.log("createParty DAO");
        var dbo = db.db("Employee");
        var obj = req;
        console.log(obj);
        dbo.collection("Party").insertOne(obj,function(err,result){
            if(err) callback(err);

            console.log("Inserted "+obj.name);
            db.close();
            callback(err,result);
        })

    })
}
