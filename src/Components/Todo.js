import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((item, idx) =>
          idx === action.idx ? { ...item, completed: !item.completed } : item
        ),
      };
    default:
      return state.todos;
  }
};

const Todo = () => {
  const [text, setText] = useState("");
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "add-todo", payload: text });
        setText("");
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {todos.map((todo, idx) => {
        return (
          <div
            key={idx}
            style={
              todo.completed
                ? {
                    textDecoration: "line-through",
                    backgroundColor: "red",
                  }
                : {}
            }
            onClick={() => dispatch({ type: "toggle-todo", idx })}
          >
            {todo.text}
          </div>
        );
      })}
      <pre>{JSON.stringify(todos, null, 4)}</pre>
    </form>
  );
};

export default Todo;
