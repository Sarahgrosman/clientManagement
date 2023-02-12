import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Search.css"

const Search = ({data,setData,setSearchResult}) => {
    const [sortType,setSortType] =useState(null)
    const [search,setSearch] = useState("")
    

    const navigate = useNavigate();

    useEffect(() => {
      
        const sortArray = () => {
          try{
            setData([...data]?.sort((a,b) => a[sortType]?.localeCompare(b[sortType])))
          }
     
      catch(err){
        console.log(err);
      }
    }
  
      sortArray();
    }, [sortType]);

    useEffect(() => {
      const searchClient = () =>{
        if(search==""){
          setSearchResult(null)
        }
        else{
          const result = data?.filter((client)=>
          client.name?.includes(search)
      )
      setSearchResult(result)
        }
       
      }

      searchClient();
    
    }, [search])
    

    
return (

    <div className='search'>
        
        <button onClick={()=>navigate("/NewClient")}>חדש</button>
        <div>
          <select onChange={(e)=>setSortType(e.target.value)}>
            <option></option>
            <option>source</option>
            <option>status</option>
            <option>name</option>
          </select>
        
          <label>מיון לפי</label>
        </div>
        <div>
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="חפש"
          />
         </div>
    </div>
  )
}




export default Search