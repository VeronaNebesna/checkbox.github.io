import React, {useState} from "react"
import "./App.css"
import Checkbox from './Checkbox'
import CheckTodo from "./CheckTodo"
import AddCheck from "./AddCheck"

const App = ()=>{
	const[todos, setTodos] = useState(CheckTodo)


	function deleteTodos(id){
        setTodos(todos.filter(todo=>todo.id !==id))
	}
	function onChange(desc){
		setTodos(todos.concat([{
			desc,
			id:Date.now(),	
		}]))
	}

  return (
    <div className="checkout_box">
		<h1>box checkout</h1>
		  	<AddCheck
			  onChange={onChange}
			  />
      	<span className="line"></span>
				
      	<Checkbox
		  todos={todos}
		  deleteTodos={deleteTodos}
		/>
    </div>
  );
}

export default App;
