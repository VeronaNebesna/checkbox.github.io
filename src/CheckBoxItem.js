import React, { useState } from "react"

const CheckboxItem =({
    id,
    desc,
    deleteTodos
})=> {
    const[check, setCheck]= useState(false);
    return(
        
        <div>
			<div className="checkout_items" key={id}>
				<input type="checkbox" id="select_1" onClick={()=>setCheck(!check)}></input>
				<p className={check ? "line-through" : null}>{desc}</p>
                <button className="delete_btn" onClick={()=>deleteTodos(id)}>delete</button>
			</div>
            <span className="line_ufter_items"></span>
        </div>
    )
}

export default CheckboxItem