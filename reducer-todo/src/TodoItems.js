import React, {useState} from 'react';
import { todoReducer } from './reducers/todoReducer';
const TodoItems = (props) => {
  
    
   
        
    return (
        <div>
            {props.todos.map(done => {
             
                return(
                    <div key={done.id}>
                        <li>{done.item}</li>
                       
                    </div>
                )
            })}
         
        </div>
    )
}
export default TodoItems;