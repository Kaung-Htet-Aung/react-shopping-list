import React, { useState } from 'react';
import '../styles/form.css'
const Form=({setInputText,addItem})=>{
    
    function inputHandler(value){
        setInputText(value)
    }
    return(
        <div className='form'>
            <input type="text" 
             placeholder='Add a new item'
             onChange={(e)=>inputHandler(e.target.value)}
             />
             <button onClick={addItem}>Add</button>
        </div>
    )
}
 
export default Form;