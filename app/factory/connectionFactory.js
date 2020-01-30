// Versão do MySql communit 5.7.29
var config = require('./config/config.json')
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: config.username,
    password: config.password,
    database: 'routes'
})

connection.connect(function (err) {
    if (err) {
        console.log(err)
        return
    }

    console.log('Conectado')
})


// connection.query('INSERT INTO rotas SET ?', {
//     'id': '10.000000,10.000000:10.000000,10.000000', 'principal': '{ rota : { lat:long, lat:long } }',
//     'secundaria': '{ rota : { lat:long, lat:long } }'
// }, function (error, results, fields) {
//     if (error) throw error;
//   console.log('Gravou: ', results.insertId);
// })

connection.query('SELECT * FROM rotas WHERE id = "10.000000,10.000000:10.000000,10.000000"', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});
