import React from "react";
import {useState} from 'react';

export const AddTodoForm = (props) => {
    const [title,setTitle]=useState("")
    const [desc, setDesc] = useState("");
    const [choice, setChoice] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Fill all details")
            setChoice("")
            
          }
          else{
            props.addTodo(title,desc,choice)
            setTitle("")
            setDesc("")
            setChoice("")

        }
    }
  return (
    <div className="container my-3">
      <h3>Add A Todo</h3>
      <form  onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Task Name
          </label>
          <input type="text" autoComplete="off" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Task Description
          </label>
          <input type="text" autoComplete="off" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
        </div>
        <div className="mb-3">
          <label htmlFor="dropdown" className="form-label">
            Repeating Task
          </label>
          <select autoComplete="off" value={choice} onChange={(e)=>{setChoice(e.target.value); submit(e)}} className="form-control" name="choice" id="dropdown">
                <option value="none" selected hidden>select an option</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
            </select>
        </div>
 
      </form>
    </div>
  );
};