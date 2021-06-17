import React,{useContext, useState} from 'react'
import {DataContext} from './DataProvider'

export default function Footer() {
    const [checkAll, setCheckAll] = useState(false)
    const [todos, setTodos] = useContext(DataContext)
    const handleCheckAll = () =>{
        const newTodos = [...todos]
        newTodos.forEach(todo =>{
            todo.complete = !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }
    const newTodosComplete = () => {
        return todos.filter(todo => todo.complete === false)}

    const deleteTodo = () => {
        setTodos(newTodosComplete())
        setCheckAll(false)
    }


    return (

        
        <div className="row">
        <label htmlFor="all">
        <input type="checkbox" name="all" id="all"
        onChange={handleCheckAll} checked={checkAll} />
        TOUT
        </label>
        <p>Vous avez  {newTodosComplete().length} choses à faire. </p>
        <button id="delete" onClick={deleteTodo} >Effacer</button>
  
        </div>
    )
}
