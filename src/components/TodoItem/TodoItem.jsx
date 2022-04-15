import React from 'react';


export const TodoItem = ({todo,onDelete,changeStatus}) => {
  return (
    <>
  <div>
     <h4>Title :{todo.title}</h4>
     <p>Desc: {todo.desc}</p>
     <p>Repeatative: {todo.choice}</p>
     <input type="checkbox" className="btn btn-sm btn-danger"  checked={todo.done} onClick={()=>{changeStatus(todo , !todo.done)}}></input>
     <button className="btn btn-sm btn-danger"  onClick={()=>{onDelete(todo)}}>Delete</button>
  </div>
  <hr/>
  </>
  )
};
