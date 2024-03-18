import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState<string[]>([]);
  const [editId, setEditId] = useState<number>();
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmit = () => {
    if (editId) {
      const newList = list.map((e, i) => {
        if (i === editId) return inputValue;
        return e;
      });
      setList(newList);
      setInputValue("");
      setEditId(undefined);
    } else {
      if (inputValue.length) setList([...list, inputValue]);
      setInputValue("");
    }
  };

  const onEdit = (index: number) => {
    const value = list.find((_, i) => i === index);
    if (value) setInputValue(value);
    setEditId(index);
  };

  const onRemove = (index: number) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
      <div>
        {list.map((e, i) => {
          return (
            <div>
              {e}
              <button onClick={() => onEdit(i)}>Edit</button>
              <button onClick={() => onRemove(i)}>Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
