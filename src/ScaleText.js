import React from "react"

const ScaleText = ({
    clickPlus,
    clickMinus,
    plus
})=>{
   
    return(
        <div className="scale_text_div">
            <div className="scale_icon">
                <button className="scale_icon_plus" onClick={()=>clickPlus()} disabled={plus>=3}>
                    <i class="fas fa-plus-square"></i>
                </button>
                <button className="scale_icon_minus" onClick={()=>clickMinus()}  disabled={plus<=0}>
                    < i class="fas fa-minus-square"></i>
                </button>
            </div>
        </div>
    )
}

export default ScaleText