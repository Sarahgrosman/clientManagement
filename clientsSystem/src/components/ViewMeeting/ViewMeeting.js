import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EditableLabel from '../EditableLabel/EditableLabel'

const ViewMeeting = ({allMeeting,newMeeting,setNewMeeting,params,date}) => {
    const [meetingsToHour,setMeetingsToHour] = useState([])
    const hours = [{hour:"8:00-9:00"},
                   {hour:"9:00-10:00"},
                   {hour:"10:00-11:00"},
                   {hour:"11:00-12:00"},
                   {hour:"12:00-13:00"},]
                                   
   
    const viewMeeting = (hour) =>{
         
        const minHour = hour?.hour.split(":")[0]
       
        const meetingToHour = allMeeting?.filter((meeting)=>
             meeting.hour.split(":")[0] == minHour
             )
            
            return meetingToHour
            
    }

    const appointment = async() => {
        if(newMeeting.hour){
            { try{
                const {data} = await axios.post('http://localhost:5000/newMeeting',{newMeeting})
                 console.log(data);
                 alert(data)
                }
                catch(err){
                    console.log(err);
                } }
        }
            
        else{
            alert("יש לקבוע שעה")
        }
        
        }

    useEffect(()=>{
        if(allMeeting!=[]){
            let meetings = []
            hours.map(h=>
            {const meeting = viewMeeting(h)
                meetings.push({hour:h.hour,meeting:meeting})  
            } 
            )
            setMeetingsToHour(meetings)
    }
    },[allMeeting])
  return (
    <div>
        {meetingsToHour.map((h)=>
        <tr>
            <td>{h?.hour}</td>
            <td onClick={()=>setNewMeeting({name:params.name,date:date.dateSelected,idUser:params.idUser})}>
                {h.meeting.length>0?
                    <div>
                    <p>שם הלקוח:{h.meeting[0]?.name}</p>
                    <p onChange={(e)=>setNewMeeting({...newMeeting,hour:e.target.value})}>
                    <EditableLabel text = {h.meeting[0]?.hour} />
                    </p>
                    </div>:
                    newMeeting?
                    <div>
                        <p>שם הלקוח:{newMeeting.name}</p>
                        <p onChange={(e)=>setNewMeeting({...newMeeting , hour:e.target.value})}>
                        <EditableLabel text = "לחץ לקביעת שעה" />
                        </p>
                        <button onClick={()=>appointment()}>אישור</button>
                   </div>:
                   "לקביעת פגישה לחץ כאן "
                   }
            </td>
        </tr>)}
    </div>
  )
}

export default ViewMeeting