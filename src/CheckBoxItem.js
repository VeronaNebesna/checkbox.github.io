import React  from "react"

const CheckboxItem =({
    id,
    desc,
    deleteTodos,
    isChecked,
    changeTodo,
    plus,
})=> {
    let classes=[]
    if(plus === 1){
        classes.push(" scale_1")
    }else if(plus===2){
        classes.push("scale_2")
    }else if(plus===3){
        classes.push("scale_3")
    }else{
        classes.push("")
    }
    
   console.log(plus)
    return(
        <div>
			<div className="checkout_items" key={id}>
				<input type="checkbox" id="select_1" className="select-input " onClick={()=>changeTodo(id)}></input>
				<p className={isChecked ? "line-through": classes} >{desc}</p>
                <button className="delete_btn" onClick={()=>deleteTodos(id)}><i class="fas fa-trash-alt"></i></button>
			</div>
            <span className="line_ufter_items"></span>
        </div>
    )
}

export default CheckboxItem