import { useState } from 'react';
import './App.css';

function TodoListD5() {
    const [todo, setTodo] = useState();
    const [list, setList] = useState([]);

    function onCreate() {
        if (todo != "") {
            setList([ ...list, todo])
            console.log(list)
            setTodo("");
        }
    }


    
    return (
        <div className='App' >
        <input
            type='text' 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}/>
            {" "}
            <button onClick={onCreate}>Create</button>

            {list.map((list) => 
            <p key={list}>
                {list}  
                <button>Edit</button>
                <button>Delete</button>
            </p>)}
        </div>
        
    );
}
export default TodoListD5;