import React, {useState} from 'react'


const AddCheck = ({
    onChange
})=>{
    const[value, setValue] = useState("");
  function handleChange(e){
      e.preventDefault()
      if(value.trim()){
        onChange(value);
        setValue("")
      }
  }
    return(
        <div className="input_fild">
            <form onSubmit={handleChange} >
                <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder="add to do"/>
                <button type="submit"><i class="fas fa-plus"></i></button>
            </form>
        </div>
    )
}

export default AddCheck