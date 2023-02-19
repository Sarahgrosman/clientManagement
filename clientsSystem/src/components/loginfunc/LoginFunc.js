import React, { useRef , useState} from 'react';
import './Login.css';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';
import  ReCAPTCHA  from "react-google-recaptcha"

export default function Login({ setToken,token }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const captchaRef = useRef ( null );
  const navigate = useNavigate();

  const location = useLocation();

  const {state} = location;


  async function loginUser(credentials) {
    try{
      const {data} = await axios.post('http://localhost:5000/login', {credentials})
     setToken({...token,message:data})
    }
    catch(error){
      console.log(error);
    }
   
      
   }

   async function registerUser(credentials) {
    try{
      const {data} = await axios.post("http://localhost:5000/newUser", {credentials})
      console.log(data);
      setToken([{...token,massage:data}])
      
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
      console.log("recaptcha",data)
      //setToken([{...token,reCaptcha:data}])
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
    if(token.message==`ברוכ/ה הבא/ה ${username}` && token.reCaptcha=="Human 👨 👩"){
      navigate('../allClients',{state:username})
    }
  }

  const handleSubmitRegister = async e =>{
    e.preventDefault();
    await checkToken();
    await registerUser({
      username,
      password})
      if(token[0]?.massage === "עודכן בהצלחה" && token[0]?.reCaptcha === "Human 👨 👩"){
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
      <div>{token}</div>
    </div>
  )
}

