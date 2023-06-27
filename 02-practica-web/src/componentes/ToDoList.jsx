import React, { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    const newTodos = [...todos, inputValue]
    setTodos(newTodos)
    setInputValue('')
  }
  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
  }
  return (
    <div>
      <h1>Lista de tareas </h1>

      <input
        type='text'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAdd}> Agregar  </button>
      <ul>
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            handleDelete={() => handleDelete(index)}
          />

        ))}

      </ul>

    </div>
  )
}

export default ToDoList
