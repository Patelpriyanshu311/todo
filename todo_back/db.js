const mysql = require("mysql");

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'project'
});

connection.connect((err)=>{
    if(err){
        console.log(err.message)
    }
    console.log("database succesfully connected");
});


module.exports = connection;