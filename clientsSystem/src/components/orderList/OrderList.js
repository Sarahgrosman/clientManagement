import React, {  } from 'react'
import EditableLabel from '../EditableLabel/EditableLabel'



export const OrderList = ({orderProducts}) => {
  

  return (
    <div>
             
        <h3>פריטי הזמנה</h3>
         <table border="2">
          
          <thead>
            <tr>
                <th>מוצר/שירות</th>
                <th>תיאור</th>
                <th>כמות</th>
                <th>מחיר</th>
                <th>סה"כ</th>
            </tr>
            </thead>
            <tbody>
          {orderProducts?.map(el=>
            <tr>
                 <td>{el?.name}</td>
                 <td>{el?.description}</td>
                 <td onChange={(e)=> el.quantity = e.target.value } ><EditableLabel text="1"/></td>
                 <td>{el?.price}</td>
                 <td>{el?.quantity?parseInt(el?.quantity*el?.price.split(" ")[0]):el?.price}</td>
               </tr>
                )}
             </tbody>
         </table>
    
    </div>
  )
}
