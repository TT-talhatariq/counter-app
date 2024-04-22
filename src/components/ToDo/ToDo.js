import React, { useState } from "react";

import "./ToDo.css";
import Item from "../Item/Item";

const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  // Add Task
  const addTaskHandler = (e) => {
    e.preventDefault();

    let newTask = {
      id: new Date().getTime().toString(),
      name: inputValue,
      status: "pending",
    };
    setList([...list, newTask]);
    console.log(list);
  };

  // Mark Task DOne
  const markDoneHandler = (id) => {
    // find task
    const updatedList = list.map((task) => {
      if (task.id === id) task.status = "done";
      return task;
    });

    setList(updatedList);
  };

  // Remove Task

  // Mark Task DOne
  const deleteHandler = (id) => {
    // find task
    const updatedList = list.filter((task) => {
      if (task.id !== id) return task;
    });

    setList(updatedList);
  };

  return (
    <div className="container">
      <div className="box">
        {/* Top/Input Container */}
        <div className="todo-container">
          <h1>Make your To-Do List</h1>
          <div>
            <p>Add your items here 🖋</p>
            <form onSubmit={addTaskHandler}>
              <input
                type="text"
                placeholder="Your Item"
                value={inputValue}
                onChange={onChangeInput}
              />
              <button onSubmit={addTaskHandler}>Submit</button>
            </form>
          </div>
        </div>

        {/* Items Container */}

        <div>
          {list.length !== 0 && (
            <Item
              list={list}
              onDone={markDoneHandler}
              onDelete={deleteHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
