import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setTodos([...todos, { id: Date.now(), text: input, completed: false }])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="container">
      <header className="header">
        <h1>AWS & GitHub Actions</h1>
        <p>Simple Todo App for Deployment Practice</p>
      </header>

      <main className="main-content">
        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to be done?"
            className="todo-input"
          />
          <button type="submit" className="add-button">Add</button>
        </form>

        <ul className="todo-list">
          {todos.length === 0 && <li className="empty-state">No tasks yet. Add one above!</li>}
          {todos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <span onClick={() => toggleTodo(todo.id)} className="todo-text">
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
