import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from './reducers/todoReducer';
import TodoItems from './TodoItems';

const TodoForm = () => {
    const [todo, setTodo] = useState('');
    const [state, dispatch] = useReducer(todoReducer, initialState);
   console.log('state', todo)
    const handleChange = e => {
     setTodo(e.target.value)
      
        
    };

    const handleSubmit = b => {
        b.preventDefault();
       
         
    };

 return (
     <div>
         <h1>Todo Form</h1>
         <form onSubmit={handleSubmit}>
           
         <TodoItems todos={state.tasks}  />
            
         <input type="text" name="todos" placeholder="need done" 
         value={todo} onChange={handleChange}
         ></input>
         
         <button 
         onClick={() => {
             dispatch({ type: 'Add-todo', payload:todo})
         }}
         >Add Task</button>
         <button
         onClick={() => {
           dispatch({ type: 'Delete-todo'})  
         }}
         >Delete completed</button>
         </form>
     </div>
 )





}

export default TodoForm;