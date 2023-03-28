import React, { useState } from 'react';

function CreateArea(props) {
    const [input, setInput] = useState({
        title: "",
        content: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setInput(prevInput => {
            return { ...prevInput, [name]: value }
        })
    }

    function submitNote(e) {
        props.onAdd(input)
        setInput({
            title: "",
            content: ""
        })
        e.preventDefault()

    }

    return (
        <form>
            <input type="text" name="title" placeholder='Title' value={input.title} onChange={handleChange} />
            <textarea name="content" placeholder="Take a note..." rows="3" value={input.content} onChange={handleChange} />
            <button onClick={submitNote}>Add</button>
        </form>
    )
}

export default CreateArea