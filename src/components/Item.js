import React, { useState } from 'react'

export const Item = ({ id, title, done }) => {
    const [edit, setEdit] = useState(false)

    return (
        <div key={id} className='item'>
            {
                !edit ?
                    <p>{title}</p>
                    :
                    <input type="text" value={title} />
            }

            <div className='item_btn_Container'>
                <input type="checkbox" value={done} />
                <button onClick={() => setEdit(!edit)}>{edit ? "Done" : "Edit"}</button>
            </div>

        </div>
    )
}
