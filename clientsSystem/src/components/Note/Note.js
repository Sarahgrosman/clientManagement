import React, { useState } from 'react'

const Note = ({setIsNote,isNote,setNote,isMeeting,setIsMeeting}) => {
     
    

    const whoClick = (stateSelected) =>{
    
      if(stateSelected[0]){
        stateSelected[1](false)
         setNote("")
        }
      else{
        stateSelected[1](true)
      } 
      stateSelected[2](false)
         
    }


    const details = [
    {text:"הערה" ,stateToRender:[isNote,setIsNote,setIsMeeting]},
    {text:"הזמנות קודמות"},
    {text:"לוג שיחה" ,stateToRender:[isNote,setIsNote,setIsMeeting]},
    {text:"הקפצת הודעה"},
    {text:"פגישה",stateToRender:[isMeeting,setIsMeeting,setIsNote]}
  ]

    

  return (
    <div>
       
        {details.map(detail=>
        
          <button className="clientActivity"
                  onClick={() => whoClick(detail.stateToRender)}>{detail.text}</button>
          
           
      )}
    </div>
  )
}

export default Note