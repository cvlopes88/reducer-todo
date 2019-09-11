

export const initialState = {
    tasks: [
   {     
  item: 'wash car',
  completed: false,
  id: 3892987589
},{

    item: 'laundry',
  completed: false,
  id: 3892987588
}
    ]
};
export const todoReducer = (state, action) => {
    switch (action.type) {
        case "Add-todo":
            return {
                ...state,
              tasks:[...state.tasks, {item: action.payload, id:Date.now(), completed: false}] 
            }; 
            case 'Delete-todo':
                return {
                    ...state,
                    ...state.tasks.filter((completed, i) => i !== action.id)
                   
                    
                    

                }  
 
                
            
    
    

    default:
                return state
        }
};

