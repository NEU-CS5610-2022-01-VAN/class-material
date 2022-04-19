import React, { useState } from "react";
import useTodos from "../hooks/useTodos";
import "../style/todoList.css";

export default function Todos() {
  const [newItemText, setNewItemText] = useState("");
  const [todosItems, setTodosItems] = useTodos();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = e.currentTarget.item.value;
    if (!name) return;

    const item = {
      name,
      id: Date.now(),
      complete: false,
    };

    setNewItemText("");

    // TODO: call POST endpoint
    setTodosItems([...todosItems, item]);
  };

  return (
    <div className="todo-list">
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="todo-form"
        autoComplete="off"
      >
        <input
          type="text"
          name="item"
          id="item"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
        />
        <button type="submit">+ Add Item</button>
      </form>

      <ul className="list">
        {todosItems.map((item) => {
          return (
            <li key={item.id} className="todo-item">
              <input
                onChange={(e) => console.log(e.target)}
                value={item.id}
                type="checkbox"
                checked={item.completed}
              />
              <span className="itemName">{item.title}</span>
              <button aria-label={`Remove ${item.title}`} value={item.id}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
