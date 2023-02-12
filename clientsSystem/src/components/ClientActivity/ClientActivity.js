import axios from 'axios'
import React,{useState} from 'react'
import Conduct from '../Conduct/Conduct'
import DailyPlanner from '../dailyPlanner/DailyPlanner'
import Documentation from '../Documentation/Documentation'
import Note from '../Note/Note'
import "./ClientActivity.css"

const ClientActivity = ({params}) => {
  const [isNote,setIsNote] = useState(null)
  const [isMeeting,setIsmeeting]=useState(null)
  const [note,setNote] = useState({})
  const [date,setDate]=useState(null)
  

  function getDate(){
    const myDate = new Date()
  
    setDate(`${myDate.getDate()}/${myDate.getMonth()+1}/${myDate.getFullYear()}`)
 }


  const updateActivity = async() =>{
    try{
      await axios.post('http://localhost:5000/updateActivity',{note,params}) 
     } 
     catch(error){
           console.log(error);
     }

 }

 function onClick(e){
  if (e.keyCode === 13){
    
    if(!date){
      getDate()
    }
    setNote({note:e.target.value,date:date})
    updateActivity()
   }
  
 }
  return (
    <div className='activity'>
        <Note setIsNote={setIsNote} isNote={isNote} setNote={setNote} isMeeting={isMeeting} setIsMeeting={setIsmeeting}/>
        {isNote?<Conduct setNote={setNote} done={(e)=>onClick(e) }/>:isMeeting?<DailyPlanner params={params}/>:null}
        <div className='view'>
        <Documentation note={note} />
        </div>
         
    </div>
  )
}

export default ClientActivity