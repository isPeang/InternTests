import '../App.css';
import { useEffect, useState } from 'react';

function TodoList() {

  //เก็บใน Local storage ให้รีเฟรชแล้วข้อมูลไม่หาย
  const [lists, setLists] = useState(() => {
    const savedLists = localStorage.getItem("lists")
    if (savedLists) {
      return JSON.parse(savedLists)
    } else {
      return [];
    }
  }); 
  const [list, setList] = useState("");
  const [isEditing, setEditing] = useState(false);
  const [current, setCurrent] = useState({}); //object state

  //get ค่าเวลา edit input และ set ค่าใหม่ไปที่ state
  function handleEditInput(e) {
    setCurrent({ ...current, text: e.target.value })
    console.log("Current list", current);
  }

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists))
  }, [lists])

  function inputChange(e) {
    setList(e.target.value);
  }

  function formSubmit(e) {
    e.preventDefault();

    if (list != "") {
      setLists([
        ...lists,
        {
          id: lists.length + 1,
          text: list.trim()
        }
      ])
    }
    setList("") //clear input
  }

  function handleRemove(id) {
    const removeItem = lists.filter((list) => {return list.id != id})
    setLists(removeItem) //update state
  }
  

  function handleEdit(list) {
    setEditing(true); //มีการคลิกที่ปุ่ม edit 
    setCurrent({ ...list }) //เก็บข้อมูลของรายการที่ต้องการแก้ไขไว้ในตัวแปร current เพื่อนำไปแสดงในฟอร์มแก้ไขต่อไป
  }

  function handleUpdateList(id, updatedList) {
    const updatedItem = lists.map((list) => {
      return list.id === id ? updatedList : list;
    });

    setEditing(false);
    setLists(updatedItem);
  }

  function handleEditSubmit(e) {
    e.preventDefault();

    handleUpdateList(current.id, current);
  }

  return (
    <div className="App">
      <h1>To do List</h1>
      {isEditing && (
        <form onSubmit={handleEditSubmit}>
          <h2>Edit todo</h2>
          <label htmlFor='editlist'>Edit todo list: </label>
          <input
            type='text'
            value={current.text}
            onChange={handleEditInput}
          />
          <button type='submit'>Update</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </form>
      )}
      {!isEditing && (
        <form onSubmit={formSubmit}>
          <input
            className='text-box'
            type='text'
            name='list'
            placeholder='Create your todo list'
            onChange={inputChange}
            value={list}
          />
          <button type='submit'>Submit</button>
        </form>
      )}

      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            {list.text}
            {" "}
            <button onClick={() => handleEdit(list)}>Edit</button> 
            {" "}
            <button onClick={() => handleRemove(list.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default TodoList;
