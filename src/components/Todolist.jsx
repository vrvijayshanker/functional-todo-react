import React from 'react'
import Todocard from './Todocard'

function Todolist(props) {

    const {todos} = props
    
  return (
    <ul className='main'>
      <h4>List</h4>
        {todos.map((todo, todoIndex) => {
            return <Todocard key={todoIndex} {...props} index={todoIndex}>
                <p>{todo}</p>
            </Todocard>
        })}
    </ul>
  )
}

export default Todolist
