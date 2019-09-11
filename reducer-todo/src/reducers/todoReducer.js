

export const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "Add-todo":
            return {
                ...state,
               
                item: action.payload,
                completed: !state.completed,
                id: Date.now()
    }   
            
                
            default:
                return state
    }

};