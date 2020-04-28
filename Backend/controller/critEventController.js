//var driverData = require('./driverdoa');
var critEventDAO = require('../DAO/critEventDAO');


exports.getCritEventsList = function (req, res) {

    critEventDAO.getCritEventsList(function (err, result) {

        if (err) throw err
        //res.write(result);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        //   /  res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).send(result);
        res.end();

    })
}



exports.createCritEvent = function (req, res) {

    critEventDAO.createCritEvent(req.body,function (err, result) {
        if (err) throw err
        //res.write(result);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        //   /  res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).send(true);
        res.end();
    });

}


