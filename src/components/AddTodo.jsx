import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import style from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  let [todoName, settodoName] = useState("");
  let [todoDate, settodoDate] = useState("");
  let handletodoName = (event) => {
    settodoName(event.target.value);
  };
  let handletodoDate = (event) => {
    settodoDate(event.target.value);
  };
  let onClickedAddButton = (event) => {
    event.preventDefault();
    onNewItem(todoName, todoDate);
    settodoName("");
    settodoDate("");
  };

  return (
    <div className="container">
      <form className="row todo-row" onSubmit={onClickedAddButton}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            className={`${style["input_class"]}`}
            onChange={handletodoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            placeholder="dd/mm/yyyy"
            value={todoDate}
            className={`${style["input_class"]}`}
            onChange={handletodoDate}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success todo-button">
            <BiMessageAdd></BiMessageAdd>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
