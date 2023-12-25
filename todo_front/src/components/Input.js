import React,{useState} from 'react';

const Input = () => {

    const[todo_discription, setTodo_discription] = useState("Add Your Task");

    const onSubmitForm = async (event) => {
        event.preventDefault();
        try {
            const body = {todo_discription};
            const response = await fetch("http://localhost:5000/todo",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(body)
            });
           window.location="/";
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="container">
            <div className="container">
                <h1 className="text-center text-muted">To-Do App</h1>
            </div>
            <form className="d-flex mt-3" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={todo_discription} onChange={(event)=>setTodo_discription(event.target.value)}/>
                <button className="btn btn-success">Add Todo</button>
            </form>
        </div>
    );
}

export default Input;
