// reactの拡張機能ES7+ React/Redux/React-Native snippetsを追加してrafceからのtabキー補完で関数コンポーネントを簡単に作成できる．
// 

import React from 'react'
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />);

  // <div>{todos.todos}</div>
  // 上記の{}内はjsを書くことができる．

};

export default TodoList
