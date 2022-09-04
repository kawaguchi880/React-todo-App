import './App.css';
import { useState, useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from "uuid";

/* <TodoList />でコンポーネントを作成できる */
function App() {
  // useStateは変数を監視，管理しているhooks
  // setTodosとはtodosの追加，削除，更新するときにset関数を使う．
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false }]);
  // todo1には設定値Todo1とTodo2が格納されている．

  const todoNameRef = useRef();
  // todoNameRefに格納される．
  const handleAddTodo = () => {
    //  タスクを追加する．
    // console.log(todoNameRef.current.value);
    const name = todoNameRef.current.value;
    if (name === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
      //  [...]これはスプレッド構文でそれぞれのオブジェクトをlistで展開する．
      // 展開されたものにカンマで右の情報(オブジェクト)を追加しているだけ．
    })


    todoNameRef.current.value = null;
  };


  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      {/* まず，refの付いたところから，文字列を取得する． */}
      <button onClick={handleAddTodo}>タスクを追加するです!</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
