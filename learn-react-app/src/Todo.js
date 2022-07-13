import React from 'react'

const Todo = ({ todo, toggleTodo }) => {

  const handleTodoClick = () => {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick} />
        {/* 変化したらhandleTodoClick関数を実行する． */}
      </label>
      {todo.name}
    </div>
  )
}

export default Todo