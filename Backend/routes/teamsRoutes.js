var express = require('express')
var router = express.Router();
var teams = require('../controller/teamsController');

//router.post('/insertEmployee',employee.insertEmployee);
//router.get('/getEmployeeList',employee.getEmployeeList);
router.get('/getTeamsList',teams.getTeamsList);//


module.exports = router;
