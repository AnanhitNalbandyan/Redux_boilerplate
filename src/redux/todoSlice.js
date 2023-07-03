
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        {
        text: 'clean room',
        completed: false
        },
        
        {
            text: 'go to shop',
            completed: false
        }
    ]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
            text: action.payload,
            id: new Date(),
            completed: false,
            }
            return {
        ...state,
        todos: [...state.todos, newTodo],
            }
        }
    ,
        deleteTodo: (state, action) => {
        const updatedTodos=  state.todos.filter((todo) => todo.id !== action.payload)
        return {
            ...state,
            todos: updatedTodos,
            }
        },
        toggleTodo: (state, action) => {
                
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
        }
    }
})

export const { addTodo, deleteTodo, toggleTodo } =todoSlice.actions

export const todoReducer= todoSlice.reducer