import React, { useState } from "react";
import ToDo from "../ToDo";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [toDoes, setToDoes] = useState([]);
  const handelInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleCLick = () => {
    setToDoes((prev) => [
      ...prev,
      { title: inputValue, id: Math.random(), isDone: false },
    ]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setToDoes((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };
  const handle = (id, newTitle) => {
    console.log("newTitle", newTitle);
    setToDoes((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          console.log("todo.title", todo.title);
          todo.title = newTitle;
        }
        return todo;
      })
    );
  };
  return (
    <div className="container">
      <div className="addTodo">
        <div>
          <input
            className="addInput"
            onChange={handelInput}
            type="text"
            value={inputValue}
          />
          <button
            disabled={!inputValue}
            className="addButton"
            onClick={handleCLick}
          >
            Add
          </button>
        </div>
        <div>
          {toDoes.map((item) => (
            <ToDo
              key={item.id}
              handle={handle}
              handleDelete={handleDelete}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
