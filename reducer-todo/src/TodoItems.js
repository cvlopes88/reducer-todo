import React, {useState} from 'react';
import { todoReducer } from './reducers/todoReducer';
const TodoItems = (props) => {
    const [oldItem, setOldItem] = useState([]);
    let items = [];
    items.push(props.todos);

    // setOldItem(item)
    console.log(items)
        
    return (
        <div>
            {items.map(done => {
             
                return(
                    <ul key={done.id}>{done.item}</ul>
                )
            })}
         
        </div>
    )
}
export default TodoItems;