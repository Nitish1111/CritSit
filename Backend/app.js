var express = require('express');
var app = express();
var cors = require('cors');
//var employee = require('./controller/employeeController');
var admin = require('./routes/adminRoutes');
var critEvents = require('./routes/critEvent');
var teams = require('./routes/teamsRoutes');

var bodyparser = require('body-parser');
app.use(express.static(__dirname));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

app.use('/admin', admin);
app.use('/critEvents', critEvents);
app.use('/teams', teams);

//app.use('/employee', employee);

app.listen(3000, function () { console.log('started at 3000') })