import React, {useState} from "react"
import "./App.css"
import Checkbox from './Checkbox'
import CheckTodo from "./CheckTodo"
import AddCheck from "./AddCheck"
import ScaleText from "./ScaleText"



const App = ()=>{
	const[todos, setTodos] = useState(CheckTodo);
	const[plus, setPlus] = useState(0);

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

	function clickPlus (){
		setPlus(plus+1)
	}
	function clickMinus(){
		setPlus(plus-1)
	}
  return (
	  <>
	  <ScaleText
		  clickPlus={clickPlus}
		  clickMinus={clickMinus}
		  plus={plus}
	  />
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
				plus={plus}
			/>
    </div>
	</>
  );
}

export default App;