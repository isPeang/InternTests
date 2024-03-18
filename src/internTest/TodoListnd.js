import '../App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);
  const [current, setCurrent] = useState({});

  function inputChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (todo != "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ])
      setTodo("");
    }
  }

  function handleDelete(id) {
    const removeItem = todos.filter((todo) => { //เมธอด filter เพื่อสร้างอาร์เรย์ใหม่ที่ประกอบด้วยเฉพาะรายการที่มีเงื่อนไขที่กำหนดให้เป็นจริงเท่านั้น โดยเงื่อนไขที่ใช้คือรายการใดๆ ที่มี id ไม่เท่ากับ id ที่ถูกส่งเข้ามาในฟังก์ชัน handleRemove.
      return todo.id != id
    })
    setTodos(removeItem);
  }

  function handleClickEdit(todo) {
    setEditing(true); 
    setCurrent({ ...todo }) //เก็บข้อมูลของรายการที่ต้องการแก้ไขไว้ในตัวแปร current เพื่อนำไปแสดงในฟอร์มแก้ไขต่อไป
    console.log("current", {...todo})
  }

  return (
    <div className="App">
      {!editing && (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={todo}
            onChange={inputChange} />
          {" "}
          <button>Submit</button>
        </form>
      )}
      {editing &&
        <form>
          <label>Edit: </label>
          <input 
            type='text'
            value={current.text}
            onChange={inputChange}
          />
        </form>
      }


      <ul>
        {todos.map((todo => (
          <li key={todo.id}>
            {todo.text}
            {" "}
            <button onClick={() => handleClickEdit(todo)}>Edit</button>
            {" "}
            <button onClick={() => handleDelete(todo.id)}>Remove</button>
          </li>
        )))}
      </ul>
    </div>
  );
}

export default App;
