import React, { useContext } from 'react'
import { Item } from '../components/Item'
import { Context } from '../context/MyContext'



export const ItemList = ({ data }) => {
    // const { state } = useContext(Context)
 
    return (
        <div className='itemList' >

            {
                data.length === 0 ? <p>No Data</p> :
                    data.map((item, index) => <Item key={item.id}  {...item} />)
            }
        </div>
    )
}
