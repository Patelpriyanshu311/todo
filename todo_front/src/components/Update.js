import React,{useState} from 'react';

const Update = ({todo}) => {

    const [todo_discription, setTodo_discription] = useState(todo.todo_discription);

    const updateDisc = async(e) => {
        e.preventDefault();
        try {
            const body = {todo_discription};
            const response = await fetch(`http://localhost:5000/todo/${todo.todo_id}`,{
                method : "PUT",
                headers : {
                    "Content-Type":"application/json"
                },
                body : JSON.stringify(body)
            })
            window.location="/";
        } catch (error) {
            
        }
    }

    console.log(todo);
    return (
     <div>
        <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
            Edit
        </button>
        <div class="modal" id={`id${todo.todo_id}`}>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Edit Todo</h4>
                    <button type="button" class="close" data-dismiss="modal" onClick={(e)=>{setTodo_discription(todo_discription)}}>&times;</button>
                </div>
                <div class="modal-body">
                    <input type="text" className="form-control" value={todo_discription} onChange={(event) => {
                        setTodo_discription(event.target.value);
                    }}/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={(e)=> updateDisc(e)}>Edit</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>

                </div>
            </div>
        </div>
        </div>

     </div>
    );
}

export default Update;
