import React, {  } from 'react'
import EditableLabel from '../EditableLabel/EditableLabel'



export const OrderList = ({orderProducts,setOrderProducts}) => {
  
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
          {orderProducts?.map((el,i)=>
            <tr>
                 <td>{el?.name}</td>
                 <td>{el?.description}</td>
                 <td onChange={(e)=>{el.quantity = e.target.value
                                      setOrderProducts([...orderProducts])}} ><EditableLabel text={el.quantity}/></td>
                 <td>{el?.price}</td>
                 <td>{parseInt(el?.quantity)*parseInt(el?.price?.split(" ")[0])}</td>
               </tr>
                )}
             </tbody>
         </table>
    
    </div>
  )
}
