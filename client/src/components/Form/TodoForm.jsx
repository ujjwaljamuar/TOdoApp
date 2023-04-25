import React, { useState } from 'react'

import './TodoForm.css'

const TodoForm = () => {

    const [text, setText] = useState("");

    const onFormSubmit = () =>{

    }

    const onInputChange = (ev) =>{
        //console.log(ev.target.value);
        setText(ev.target.value);

    }

    return(
        <form onSubmit={onFormSubmit}>
            <input
                type="text" 
                placeholder='Enter new Todo'
                onChange={onInputChange}
            />
        </form>
    )
}

export default TodoForm;