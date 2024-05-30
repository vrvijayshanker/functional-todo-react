import React from 'react'

function Todoinput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    
  return (
    <header>
        <input type='text' value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value) 
        }} placeholder='Enter TODO Items'/>
        <button onClick={() => {
            handleAddTodos(todoValue)
            setTodoValue('')
        }}>Add</button>
    </header>
  )
}

export default Todoinput
