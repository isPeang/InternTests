import { keyboard } from '@testing-library/user-event/dist/keyboard';
import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState({input: '', list: []});
  const [todolist, setTodolist] = useState([]);
  const [inputTodo, setInputtodo] = useState();

  function onCreate() {
    if (inputTodo.length) {
      setTodolist([...todolist, inputTodo]);
      setInputtodo('');
      console.log(todolist)
    }
  }

  function onRemove(id) {
    const removeItem = todolist.filter(() => { //filter รายการทั้งหมดที่มีใน array 
      return todolist.id != id
    })
    setTodolist(removeItem); //set ค่าจากตัวแปร removeItem มาไว้ในตัวแปร todolist
  }

  //การที่จะเซ็ทเข้าไปจะต้องได้ค่าเดิมกลับมาก่อน

  return (
    <div className="App">
      <input
        type='text'
        value={inputTodo}
        onChange={e => setInputtodo(e.target.value)}
      />
      {" "}
      <button onClick={onCreate}>Create</button>

      {todolist.map((todolist) =>
        <div>
          <p> {todolist}
          {" "}
          <button>Edit</button>
          {" "}
          <button onClick={() => onRemove(inputTodo)}>Delete</button>
          </p> 
        </div>
      )}



    </div>
  );
}

export default App;
