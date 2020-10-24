import React from "react"
import CheckboxItem from "./CheckBoxItem"



const Checkbox = ({
    deleteTodos,
    todos
})=>{
    return(
        <div key="check">
          
			{
                todos.map(({id,desc,isChecked})=>(
                    <CheckboxItem
                        id={id}
                        desc={desc}
                        isChecked={isChecked}
                        deleteTodos={deleteTodos}
                    />
                ) )
            }
        </div>
    )
}

export default Checkbox