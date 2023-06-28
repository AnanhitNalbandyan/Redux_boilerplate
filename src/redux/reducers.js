
const initialCounterState = {
    count:0,
}
const initialTodoState = {
    todos: [{
        text: 'clean room',
        completed: false},
        {
            text: 'go to shop',
            completed: false
        }
    ]
}
export const counterReducer = (state=initialCounterState, action) => {
    switch (action.type) {
        
        case 'INCREASE':
            return {
                ...state,
                count:state.count +1
            }
        case 'DECREASE':
            return {
                ...state,
                count:state.count -1
            }
        case 'CHANGE':
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            return state
    }



}

export const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            
        const newTodo = {
            text: action.payload,
            id: new Date(),
            completed: false,
            }
            return {
        ...state,
        todos: [...state.todos, newTodo],
            }
        case 'DELETE_TODO':
            
        const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload)
        return {
            ...state,
            todos: updatedTodos,
            }
        
        case 'TOGGLE_TODO':
            
        const toggledTodos = state.todos.map((todo) => {
            if (todo.id === action.payload) {
            return {
                ...todo,
                completed: !todo.completed,
            }
            }
            return todo
        })
        return {
            ...state,
            todos: toggledTodos,
        }

        default:
        return state
    }
        
}