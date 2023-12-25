const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const bodyparser = require("body-parser");
//middelwere

app.use(bodyparser.json());
app.use(cors());

// Routes

//create todo
app.post("/todo",(req, res) => {
   let post = {todo_discription : req.body.todo_discription};
   let sql = 'INSERT INTO todo SET ?';
   let query = connection.query(sql, post, (err, result) => {
       if(err){
           console.log(err);
       }
       console.log(result);
       res.send("inserted succesfully");
   }) 
});


//get all todo
app.get("/todo",(req, res) => {
    connection.query("SELECT * FROM todo",(err, raw) => {
        if(!err){
            res.send(raw);
        }
        else{
            console.log(err.message);
        }
    })
});

//get a todo
app.get("/todo/:id",(req, res) => {
    connection.query("SELECT * FROM todo WHERE todo_id=?",[req.params.id],(err, raw) => {
        if(!err){
            res.send(raw);
        }
        else{
            console.log(err.message);
        }
    })
});

//update todo
app.put("/todo/:id",(req, res) => {
    
    let sql = 'UPDATE todo SET `todo_discription`=? WHERE `todo_id`=?';
    let query = connection.query(sql, [req.body.todo_discription, req.params.id], (err, result) => {
        if(err){
            console.log(err);
        }
        console.log(result);
        res.send("inserted succesfully");
    }) 
 });

//delete todo
app.delete("/todo/:id",(req, res) => {
    connection.query("DELETE FROM todo WHERE todo_id=?",[req.params.id],(err, raw) => {
        if(!err){
            res.send("deleted succesfully");
        }
        else{
            console.log(err.message);
        }
    })
});


app.listen(5000,() => console.log("server is running on 5000"));