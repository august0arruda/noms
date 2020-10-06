const mysql =require('mysql');
const express =require ('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
	host:'server-mysql-node',
	user: 'root',
	password:'admin',
	database: 'portalcalouro',
});

mysqlConnection.connect((err)=>{
	if(!err)
	console.log('Conexao bem sucedida!!');
	else
	console.log('Erro de conexao \n Erro: '+ JSON.stringify(err, undefined,2));
});


app.listen(3000,()=>console.log('ta na porta 3000'));


app.get('/usuario',(req, res)=>{
	mysqlConnection.query('SELECT * FROM pc_usuario',(err, rows, fields)=>{
	if(!err)
	//console.log(rows);
	//res.send(rows[0]);
	res.send(rows);
	else
	console.log(err);
	})
});



app.get('/usuario/:id',(req, res)=>{
	mysqlConnection.query('SELECT * FROM pc_usuario WHERE id = ?',[req.params.id],(err, rows, fields)=>{
	if(!err)
	//console.log(rows);
	res.send(rows);
	else
	console.log(err);
	})
});


//delete usuario
/*
app.delete('/usuario/:id',(req, res)=>{
	mysqlConnection.query('DELETE pc_usuario WHERE id = ?',[req.params.id],(err, rows, fields)=>{
	if(!err)
	//console.log(rows);
	res.send('deletado com sucesso');
	else
	console.log(err);
	})
});
*/



//nmp install -g nodemon

// http://localhost:3000/usuario

