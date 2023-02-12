import axios from 'axios'
import React, { useState,useEffect,useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import ViewMeeting from '../ViewMeeting/ViewMeeting'


const DailyPlanner = ({params}) => {
    const [date,setDate]=useState({})
    const [isBoard,setIsBoard] = useState(false)
    const [allMeeting,setAllMeeting] =useState([])
    const [newMeeting,setNewMeeting]=useState(null)
    console.log(newMeeting);
    console.log(isBoard);
    console.log(date);
    console.log(allMeeting);

    const ref = useRef(null)
    
    useEffect(()=>{
        const {dateSelected} = date
        const getMeetings = async() =>{
            
            try{
             const {data} = await axios.post('http://localhost:5000/dailyMeeting',{dateSelected})
             setAllMeeting(data)
            }
            catch(err){
                console.log(err);
            }
        }
        getMeetings()
        
    },[date.dateSelected])
    
    useEffect(() => {
        try{
        
            const updateDashboard = (dateSelected) => {
            
                const thisDate =  new Date(dateSelected);
                
                const day = thisDate.getDay()+1;
            
                setDate({...date,day:day});
    
            }
            
            if(date.dateSelected){
                updateDashboard(date.dateSelected)
                setIsBoard(true)
            }
            
        }
        catch(err){
            console.log(err);
        } 
    }, [date.dateSelected])


return (
    <div>
        <input type="date" onChange={(e)=>setDate({dateSelected:e.target.value})} onClick={()=>{setIsBoard(false)
                                                                                               setNewMeeting(null)}} />
         {isBoard?
         <div >
         <FontAwesomeIcon icon={faCircleChevronLeft} />
            <table border="2" >
                <thead>
                    <tr>
                    <td> -ה {date.dateSelected}  יום {date.day}</td>
                    </tr>
                </thead>
                <tbody ref={ref}>
                    <ViewMeeting allMeeting={allMeeting} newMeeting={newMeeting} setNewMeeting={setNewMeeting} params={params} date={date}/>
                </tbody>
                </table>
                <FontAwesomeIcon icon={faCircleChevronRight} />
            </div>
            :null}

    </div>
  )
}

export default DailyPlanner