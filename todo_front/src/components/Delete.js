import React, {useState, useEffect} from 'react';
import Update from './Update';

const Delete = () => {

    const [todos, setTodos] = useState([]);


    const getTodo= async() => {
        try {
            const responce = await fetch("http://localhost:5000/todo");
            const jsonData = await responce.json();
            setTodos(jsonData);
        } catch (error) {
            console.error(error);
        }
    }

    const deleteTodo= async(id) =>{
        try {
            const delete_todo = await fetch(`http://localhost:5000/todo/${id}`,{
                method : 'DELETE'
            });
            setTodos(todos.filter(todo => todo.todo_id!==id));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        getTodo();
    },[]);

    console.log(todos);
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Discription</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo=>(
                        <tr key="{todo.todo_id}">
                            <td>{todo.todo_discription}</td>
                            <td><Update todo={todo}/></td>
                            <td><button className="btn btn-danger" onClick={()=>deleteTodo(todo.todo_id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Delete;
