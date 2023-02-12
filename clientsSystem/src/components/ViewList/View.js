import React from 'react'
import EditableLabel from '../EditableLabel/EditableLabel'
import { useNavigate } from 'react-router-dom'
import './ViewList.css'
const View = ({text}) => {
    const navigate = useNavigate();
  return (
    <div>
      
      <div className= "details" onClick={()=>navigate(`../client/${text.name}/${text.idUser}`)}> 

            <div className='clientsList'><EditableLabel text={text.adress} /> <span > :כתובת </span> </div>
            <div className='clientsList'><EditableLabel text={text.source}/>  <span> : מקור הגעה</span> </div>
            <div className='clientsList'><EditableLabel text={text.status}/> <span> : סטטוס </span> </div>
            <div className='clientsList'><EditableLabel text={text.idUser}/> <span> : מספר זהות</span> </div>
            <div className='clientsList'><EditableLabel text={text.name}/> <span>: שם לקוח</span> </div>
        
</div>
    </div>
  )
}

export default View