import React from "react"
import CheckboxItem from "./CheckBoxItem"



const Checkbox = ({
    deleteTodos,
    todos,
    changeTodo,
})=>{
    console.log(todos)
    return(
        <div key="check">
          
			{
                todos.map(({id,desc,isChecked})=>(
                    <CheckboxItem
                        id={id}
                        desc={desc}
                        deleteTodos={deleteTodos}
                        changeTodo={changeTodo}
                        isChecked={isChecked}
                        
                    />
                ) )
            }
        </div>
    )
}

export default Checkbox