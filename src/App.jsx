import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, settdItems] = useState([]);
  const handleNewItem = (name, dueDate) => {
    const newItems = [...todoItems, { name: name, dueDate: dueDate }];
    settdItems(newItems);
  };

  const handleDeleteItems = (todoName) => {
    const newtodoItem = todoItems.filter((items) => items.name != todoName);
    settdItems(newtodoItem);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItem
        todoItem={todoItems}
        onDeleteItem={handleDeleteItems}
      ></TodoItem>
    </center>
  );
}

export default App;
