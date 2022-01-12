import React, { useContext } from 'react'
import { Item } from '../components/Item'
import { Context } from '../context/MyContext'



export const ItemList = () => {
    const { state } = useContext(Context)


    return (
        <div className='itemList' >

            {
                !state ? <p>No Data</p> :
                    state.map((item, index) => <Item key={index}  {...item} />)
            }
        </div>
    )
}
