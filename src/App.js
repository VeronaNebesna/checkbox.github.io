import React, {useState} from "react"
import "./App.css"
import Checkbox from './Checkbox'
import CheckTodo from "./CheckTodo"
import AddCheck from "./AddCheck"

const App = ()=>{
	const[todos, setTodos] = useState(CheckTodo);

	function deleteTodos(id){
        setTodos(todos.filter(todo=>todo.id !==id))
	}

	function onChange(desc){
		setTodos(todos.concat([{
			desc,
			id:Date.now(),
			isChecked:false	
		}]))
	}

	function changeTodo(id){
		setTodos(todos.map ((todo)=>{
			if(todo.id === id){
				todo.isChecked= !todo.isChecked
			}
			return todo
		} ))
	}

  return (
    <div className="checkout_box">
		<h1>to do list</h1>
		  	<AddCheck
			  onChange={onChange}
			  />
      	<span className="line"></span>
				
      	<Checkbox
		  todos={todos}
		  deleteTodos={deleteTodos}
		  changeTodo={changeTodo}
		/>
    </div>
  );
}

export default App;
