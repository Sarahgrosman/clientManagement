import React,{useState} from 'react'
import LoginFunc from '../../components/loginfunc/LoginFunc'
import useToken from '../../components/loginfunc/UseToken';
const Login = ({}) => {
  const [token, setToken] = useState(null);
  console.log(token);

  return (
    <div>
      <LoginFunc setToken={setToken} token={token}/>
    </div>
  )
}

export default Login