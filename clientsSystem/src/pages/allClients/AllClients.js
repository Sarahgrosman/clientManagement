import React,{useState,useEffect} from 'react'
import axios from 'axios'
import EditableLabel_Edit from '../../components/EditableLabel_Edit/EditableLabel_Edit'
import Search from '../../components/Search/Search'
import SortType from '../../components/sortType/SortType'
import "./AllClients.css"
import Sort from '../../components/Sort/Sort'
import ViewList from '../../components/ViewList/ViewList'

const AllClients = ({data,setData,}) => {
    const [buttonText,setButtonText] = useState([])
    const [searchResult,setSearchResult] = useState(null)
    const [sortResult,setSortResult] = useState(null)
    const [type,setType] = useState("כל הלקוחות")
    const [edit,setEdit] = useState(false)
    
  useEffect(()=>{
      setButtonText([
        {text:"חדשים",sortText:"חדש",function: handelClick},
        {text:"בתהליך",sortText:"בתהליך",function: handelClick},
        {text:"פעילים",sortText:"פעיל",function: handelClick},
        {text:"לא פעילים",sortText:"לא פעיל",function:handelClick},
        {text:"כל הלקוחות",sortText:"",function:clickAllClients}
        ])
    
    },[])

    useEffect(() => {
      async function getClients (){
   
        const {data} = await axios.get('http://localhost:5000/allClients')
        setData(data)
  
      }
      getClients();
       
     }, [])

     const handelClick = (sortText,e) =>{
     
      const sortClients = data?.filter(client=>
       
         client.status === sortText
      )
      
      setSortResult(sortClients)
      setType(e.target.innerText)
    }
  
    const clickAllClients = (sortText,e) =>{
      setSortResult(null)
      setType(e.target.innerText)
    }
  
    const style  =  {
      "width":"80%",
      "height":"40px",
      "color":"white",
      "backgroundColor":"black",
      "borderColor":"white",
      
    }

     
    
  return (
    <div className='clients'>
      <Sort buttonText={buttonText} style={style}/>
     
      <Search setSearchResult={setSearchResult}
              data={data}
              setData={setData}/>
      
      <ViewList data={data}
                searchResult={searchResult}
                sortResult={sortResult}/>
      
      <SortType type={type}/>
      
      {
        edit?
          <EditableLabel_Edit setEdit={setEdit}/>
        : 
          null
      }
        
    </div>
  )
  
}

export default AllClients





