import React from 'react';
import {TodoItem} from '../TodoItem/TodoItem';


export const DoneList = (props) =>{
  
  return (
  <div className="container">
      <h3 className='my-3'>Done List</h3>
      {props.todos.length === 0 ? "No todos to display":
      props.todos.map((todo)=>{
        if(todo.done){
          return (
          <TodoItem todo ={todo} key={todo.sno} onDelete = {props.onDelete} changeStatus={props.changeStatus}/>
          )
        }
      })}
      
  </div>
  )
};
