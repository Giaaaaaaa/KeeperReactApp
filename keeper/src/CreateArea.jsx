import React, { useState } from 'react';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false)

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
        <form className='create-note'>
            {isExpanded && <input type="text" name="title" placeholder='Title' value={input.title} onChange={handleChange} />}

            <textarea name="content" placeholder="Take a note..." rows={isExpanded ? "3" : "1"} value={input.content} onChange={handleChange} onClick={()=>{setExpanded(true)}} />
            <Zoom
                in={isExpanded ? true : false}
                timeout={500}
            >
                <Fab onClick={submitNote}>
                    <LibraryAddIcon />
                </Fab>
            </Zoom>

        </form>
    )
}

export default CreateArea