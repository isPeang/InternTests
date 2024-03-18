import { useState } from 'react';
import '../App.css';

function Todosixth() {
    const [todo, setTodo] = useState();
    const [list, setList] = useState([]);
    const [editId, setEditId] = useState();

    function onCreate() {
        if (editId) {
            const newList = list.map((e, i) => {
                if (i === editId) return todo;
                return e;
            });
            setList(newList);
            setEditId("");
            setEditId(undefined);
           
        } else {
            if (todo.length) {
                setList([...list, todo]);
                console.log(list)   
            }
            setTodo("")
        }
    }
    function onDelete(index) {
        const updatedList = list.filter((_, i) => i !== index);
        setList(updatedList);
    }

    const onEdit = (index) => {
        const value = list.find((_, i) => i === index);
        if (value) setTodo(value);
        setEditId(index);
      };

    return (

        <div className='App'>
            <input
                type='text'
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            <button onClick={onCreate}>Create</button>

            {list.map((list, index) =>
                <div key={index}>
                    <p>
                        {list}
                        {" "}
                        <button onClick={() => onEdit(index)}>Edit</button>
                        {" "}
                        <button onClick={() => onDelete(index)}>Delete</button>
                    </p>
                </div>
            )
            }
        </div>
    )
}

export default Todosixth;