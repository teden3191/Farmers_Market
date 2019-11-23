var express = require('express');
//var router = express.Router();
var app = express();
app.set('view engine', 'pug');

/* GET users listing. */
app.get('/Farmers', function(req, res) {
    res.render('Farmers', { title: 'Farmers' });
});

app.get('/CreateFarmerAccount', function(req, res) {
    res.render('CreateFarmerAccount', { title: 'Create Farmer Account' });
});

app.get('/FarmerLogin', function(req, res) {
    res.render('FarmerLogin', { title: 'Farmer Login' });
});

app.get('/AddItem', function(req, res) {
    res.render('AddItem', { title: 'Add an Item' });
});

//module.exports = router;