import React from "react"
import CheckboxItem from "./CheckBoxItem"



const Checkbox = ({
    deleteTodos,
    todos,
    changeTodo,
    plus,
})=>{
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
                        plus={plus} 
                    />
                ) )
            }
        </div>
    )
}

export default Checkbox