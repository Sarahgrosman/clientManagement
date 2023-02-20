import React, { useEffect, useRef , useState} from 'react';
import './Login.css';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';
import  ReCAPTCHA  from "react-google-recaptcha"

export default function LoginFunc({ setToken,token }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [reCaptcha,setReCaptcha] = useState(false);
  const [message,setMessage] = useState(null)
  console.log(reCaptcha);
  console.log(message);

  const captchaRef = useRef ( null );
  const navigate = useNavigate();

  const location = useLocation();

  const {state} = location;

  useEffect(()=>{
    if (message){
      message === `ברוכ/ה הבא/ה ${username}` && reCaptcha===true?
      navigate('../allClients',{state:username})
    :
    alert(message)
    }
  },[message])
  


  async function loginUser(credentials) {
    try{
      const {data} = await axios.post('http://localhost:5000/login', {credentials})
      console.log(data);
      setMessage(data)
    }
    catch(error){
      console.log(error);
    }
   
      
   }

   async function registerUser(credentials) {
    try{
      const {data} = await axios.post("http://localhost:5000/newUser", {credentials})
      console.log(data);
      setMessage(data)
      
    }
    catch(error){
      console.log(error);
    }
   }

   const checkToken = async () => {
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    try{
      const {data} = await axios.post("http://localhost:5000/checkToken", {token})
      console.log(data);
      if(data.split(" ")[0]=="Human"){
        setReCaptcha(true)
      }
      else{
        setReCaptcha(false)
      }
      
    }
    
    catch(error) {
    console.log(error);
    }
  }

   const handleSubmitLog = async e => {
    e.preventDefault();
    await checkToken()
     await loginUser({
      username,
      password
    });
   
    
  }

  const handleSubmitRegister = async e =>{
    e.preventDefault();
    await checkToken();
    await registerUser({
      username,
      password})
      if(message === "עודכן בהצלחה" && reCaptcha){
        navigate('../allClients',{state:username})
      }
  }

  return(
    <div className="login-wrapper">
      <h1>{state=="log in"?"נא להתחבר":"נא להרשם"}</h1>
      <form onSubmit={e =>{state === "log in"?handleSubmitLog(e):handleSubmitRegister(e)}}>
        <label>
          <p>שם משתמש</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>סיסמא</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
        <ReCAPTCHA
          sitekey={"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"} 
          ref={captchaRef}
        />
          <button type="submit">Submit</button>
        </div>
      </form>
      {/*<div>{token}</div>*/}
    </div>
  )
}

