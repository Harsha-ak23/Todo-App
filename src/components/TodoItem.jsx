import Items from "./Items";
import style from "./TodoItem.module.css";
function TodoItem({ todoItem, onDeleteItem }) {
  return (
    <div className={style.itemsContainer}>
      {todoItem.map((item) => (
        <Items
          key={item.name}
          todoName={item.name}
          itemDate={item.dueDate}
          onDeleteItem={onDeleteItem}
        ></Items>
      ))}
    </div>
  );
}
export default TodoItem;
