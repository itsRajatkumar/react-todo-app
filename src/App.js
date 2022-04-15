import './App.css';
import { useEffect, useState } from 'react';
import { TodoList } from './components/TodoList/TodoList';
import { AddTodoForm } from './components/AddTodo/AddTodoForm';
import { DoneList } from './components/DoneList/DoneList';

function App() {
  const [todos, setTodos] = useState([]);
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const changeStatus = (todo,changefleg) => {
    let newList = todos.map(a => {return {...a}})
    newList.find(data => data.sno == todo.sno).done = changefleg;
    setTodos(newList)
  }

  const addTodo = (title, desc,choice,donefleg=false) => {
    let sno
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno,
      title,
      desc,
      choice,
      done: donefleg
    }
    setTodos([...todos, myTodo])

  }


  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <div className='TodoItemlists'>
      <TodoList todos={todos} onDelete={onDelete} changeStatus={changeStatus} />
      <DoneList todos={todos} onDelete={onDelete} changeStatus={changeStatus}/>

      </div>
    </>
  );
}

export default App;


