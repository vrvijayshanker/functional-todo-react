import { useEffect, useState } from 'react';
import './App.css';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function retainData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList }))
  }
  
  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    retainData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    retainData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
    
  }, []) //dependency in [] will monitor the value, according to it, useeffect changes

  return (
    <div className="App">
      <Todoinput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <Todolist todos={todos} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}/>
    </div>
  );
}

export default App;
