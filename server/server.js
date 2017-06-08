//var io = require('socket.io');
const path= require('path');
const publicpath=path.join(__dirname,'../public');
const port=process.env.PORT||3000;
const express=require('express');
//http = require('http');
//server = http.createServer(app);
//socket = require('socket.io').listen(server);
var app=express();
 app.use(express.static(publicpath));
/*app.get('/',(req,res)=>
{
	res.render('./index.html');
});*/
app.listen(port,()=>{
	console.log('server is up on ${port}');
});
const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if (err){
	return console.log("unable to connect"); 
}
console.log("Connected to Mongo server"); 
db.collection('Form').insertOne({
	Name:name,
	Email:email
},(err,result)=>{
	if(err){
		return console.log('unable to insert',err);
	}
	console.log(JSON.stringify(result.ops,undefined,2));
});
db.close();
});
var name=null;
var email=null;
function save(){
	name=document.getElementById('id1').value;
	email=document.getElementById('id2').value;
}