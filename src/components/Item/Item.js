import React from "react";
import "./Item.css";

const Item = ({ list, onDone, onDelete }) => {
  console.log(list);
  return (
    <div>
      <h5>Your Tasks</h5>
      <ul>
        {list.map((task) => (
          <li key={task.id}>
            {task.status === "done" ? (
              <del>{task.name}</del>
            ) : (
              <p>{task.name}</p>
            )}

            {/* Buttons */}
            <div>
              <i
                class="fa-solid fa-check done"
                onClick={() => onDone(task.id)}
              ></i>
              <i
                class="fa-solid fa-trash delete"
                onClick={() => onDelete(task.id)}
              ></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
