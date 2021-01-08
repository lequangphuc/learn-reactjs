import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todoList, onTodoClick } = props;

  const handleTodoClick = (todo, index) => {
    if (!onTodoClick) return;

    onTodoClick(todo, index);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoClick(todo, index)}
          key={todo.id}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
