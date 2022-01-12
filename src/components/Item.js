import React, { useContext, useState } from 'react'
import { Context } from '../context/MyContext'

export const Item = ({ id, title, done }) => {

    const { dispatch } = useContext(Context)

    const [edit, setEdit] = useState(false)
    const [currentTitle, setCurrentTitle] = useState(title)
    const [currentDone, setCurrentDone] = useState(done)

    const handleChange = (e) => {
        const target = e.target
        const value = target.value
        console.log(value);

        // if (!value || value === title) return
        setCurrentTitle(value)
    }

    const handleEdit_Title = (id) => {
        // if current is false, toggle
        if (!edit) {
            setEdit(!edit)
        } else {
            // if current is true, compare and disptach
            console.log(id);

            if (currentTitle === title || currentTitle.trim() === "") return setEdit(false)


            dispatch({ type: "edit", payload: { id, title: currentTitle } })
            setEdit(!edit)

        }
    }

    const handleEdit_Done = (id) => {
        // if current is false, toggle


        dispatch({ type: "done", payload: { id, done: !currentDone } })

        setCurrentDone(!currentDone)
    }




    return (
        <div key={id} className='item' onSubmit={(e) => e.preventDefault()}>

            {
                !edit ?
                    <p>{currentTitle}</p>
                    :
                    <input type="text" value={currentTitle} onChange={(e) => handleChange(e)} />
            }

            <div className='item_btn_Container'>
                <input type="checkbox" checked={currentDone} onChange={() => handleEdit_Done(id)} />
                <button onClick={() => handleEdit_Title(id)}>{edit ? "Done" : "Edit"}</button>
            </div>

        </div>
    )
}
