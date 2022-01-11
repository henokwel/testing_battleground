import React from 'react'
import { Item } from '../components/Item'
export const ItemList = ({data}) => {
    console.log(data);
    
    return (
        <div className='itemList'>

            {
                !data? <p>No Data</p> :
                    data.map(item => <Item {...item} />)
            }
        </div>
    )
}
