import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './todoList.css'
import { addTodo, deleteTodo, toggleTodo } from '../redux/actionCreater'

export const TodoList = () => {
const todos = useSelector((state)=> state.todos.todos)
  console.log(todos)
  
  const dispatch = useDispatch()
  const [todoText, setTodoText] = useState('')

  const handleAddTodo = () => {
    
    dispatch(addTodo(todoText))
    setTodoText('')
  }

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id))
  
  }

  const handleRemoveTodo = (id) => {
    dispatch(deleteTodo(id))
    
  }

  return (
    <div className="container">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="todo-input"
      />
      <button onClick={handleAddTodo} className="add-button">
        Add Todo
      </button>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <button onClick={() => handleRemoveTodo(todo.id)} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
