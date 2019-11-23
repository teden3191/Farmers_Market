var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port : "3306",
    user: "root",
    password: "3191",
    database : "farmersmarket",
    insecureAuth : true
});

var farmerList = [];
connection.connect();
connection.query('SELECT * FROM faccounts', function(err, rows, fields) {
    if (err) {
        res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {
        // Loop check on each row
        for (var i = 0; i < rows.length; i++) {

            // Create an object to save current row's data
            var farmer = {
                'username':rows[i].fUserName,
                'password':rows[i].fPassword,
                'email':rows[i].fEmail
            };
            // Add object into array
            farmerList.push(farmer);
        }

        // Render index.pug page using array
        console.log(farmerList);
    }
});