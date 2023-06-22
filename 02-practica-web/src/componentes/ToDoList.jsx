import React, { useState } from 'react'

const ToDoList = () => {
  const { inputValue, setImputValue } = useState('')
  const handleAdd = () => {
    console.log('agregue', inputValue)
  }
  return (
    <div>
      <h1>Lista de tareas<h1 />

        <input
          type='text'
          value={(inputValue)}
          onChange={(event) => setImputValue(event.target.value)}
        />
        <button>Agregar  </button>
        <ul>
          <li>Item 1 <button>Eliminar</button></li>
          <li>Item 2 <button>Eliminar</button></li>
          <li>Item 3 <button>Eliminar</button></li>

        </ul>
      </h1>

    </div>
  )
}

export default ToDoList
