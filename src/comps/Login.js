import React, { useState } from 'react';
import "../style/login.scss"
import { useNavigate } from "react-router";
import{app, } from "../Firebase"

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
function Login({AuthLogin}) {
  const [ name, setName] = useState("");
  const [pass, setPass] = useState("");
const navigate = useNavigate();


const loginPage = (e) =>{
  e.preventDefault();
const auth = getAuth(app);
signInWithEmailAndPassword(auth, name, pass)

.then((usercredentials)=>{
  const user = usercredentials.user;
  if(typeof AuthLogin === 'function'){
    AuthLogin()
  }
  navigate("/");
})
.catch((error)=>{
alert("something went wrong")
});


}


  return (
    <>
     
     
         <div className="login-page">
         <div className="login-section">
         
         
             <div className="login-form">
             <form action="#" onSubmit={loginPage}>
                <label htmlFor="">Email-id</label>
                <input type="text" value={name} placeholder='abc@gmail.com' onChange={(e)=> 
                    {setName(e.target.value)}} />
                <label htmlFor="">Password</label>
                <input type="password" value={pass} placeholder='abc123' onChange={(e)=>{
                  setPass(e.target.value)
                }} />
                <button type='submit' className='btn log-in' >Log in</button>
              </form>
             </div>
            
          </div>
         </div>
         
    
    </>
  )
}

export default Login
