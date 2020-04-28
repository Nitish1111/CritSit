//var driverData = require('./driverdoa');
var teamsDAO = require('../DAO/teamsDAO');


exports.getTeamsList = function (req, res) {

    teamsDAO.getTeams(function (err, result) {

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

exports.insertEmployee = function (req, res) {

    employeeDAO.insertEmployee(req.body,function (err, result) {
        if (err) throw err
        //res.write(result);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        //   /  res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).send(true);
        res.end();
    });

}


