import React, { useState } from "react"

const CheckboxItem =({
    id,
    desc,
    deleteTodos,
    isChecked,
    changeTodo
})=> {
    return(
        <div>
			<div className="checkout_items" key={id}>
				<input type="checkbox" id="select_1" onClick={()=>changeTodo(id)}></input>
				<p className={isChecked ? "line-through":"par" } >{desc}</p>
                <button className="delete_btn" onClick={()=>deleteTodos(id)}>delete</button>
			</div>
            <span className="line_ufter_items"></span>
        </div>
    )
}

export default CheckboxItem