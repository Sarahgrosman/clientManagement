import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const NewCard = () => {
  const [newCard,setNewCard] = useState({status:"חדש"})
  console.log(newCard);
  const navigate = useNavigate();
  const location = useLocation();
  const {state} = location
  console.log(state);
  useEffect(()=>{
    if(state){
        setNewCard(...state)
    }
  },[])

    const handleSubmit = async () =>{
      if (newCard.name && newCard.idUser){
        try{
          await axios.post('http://localhost:5000/newClient',{newCard}) 
         } 
         catch(error){
               console.log(error);
         }

      }
      else{
        alert("חובה למלא שם לקוח ומספר זהות")
      } 
    }
    
  return (
    <div>
        <form className='newClient'>
            <label>
            
            <input type="text" value={newCard?.name} onChange={(e)=>setNewCard({...newCard,name:e.target.value})}></input>
            שם לקוח
            </label>
            <label>
             
            <input type='text' value={newCard?.idUser} onChange={(e)=>setNewCard({...newCard,idUser:e.target.value})}></input>
            מספר זהות
            </label>
            <label>
            <input type="text" value={newCard?.adress} onChange={(e)=>setNewCard({...newCard,adress:e.target.value})}></input>
            כתובת
            </label>
            <label> 
            <input type='text' value={newCard?.phone} onChange={(e)=>setNewCard({...newCard,phone:e.target.value})}></input>
             מספר נייד
             </label>
             <label>
            <input type='email' value={newCard?.email} onChange={(e)=>setNewCard({...newCard,email:e.target.value})}></input>
              כתובת מייל
            </label>
            <label> 
            <input type='text' value={newCard?.source} onChange={(e)=>setNewCard({...newCard,source:e.target.value})}></input>
             מקור הגעה
             </label>
            <label> 
            <select value={newCard?.status} onChange={(e)=>setNewCard({...newCard,status:e.target.value})}>
              <option>חדש</option>
              <option>בתהליך</option>
              <option>פעיל</option>
              <option>לא פעיל</option>
              <option>סגור</option>
            </select>
            סטטוס לקוח
            </label>

            <button onClick={()=>newCard?handleSubmit():alert("נא לעדכן פרטים")}>ליצירת לקוח חדש</button>
        </form>
        
        <button onClick={()=>newCard.name&&newCard.idUser?navigate(`../client/${newCard.name}/${newCard.idUser}`):alert("חובה למלא שם לקוח ומספר זהות")}>למעבר לדף לקוח וביצוע הזמנה</button>
    </div>
  )
}

export default NewCard