import React from 'react'
import { useState, useContext } from 'react'
import userContext from '../context/userContext'

function Login() {

        const [userName, setUserName] = useState('');
        const [password, setPassword] = useState('');

        const {setUser} = useContext(userContext);


         const handlesubmit = (e) => {
               e.preventDefault();
               setUser({userName, password});
         }


  return (
                  
       <div>
        <h2>login</h2>
        <input type='text' placeholder='Enter name' value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <input type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handlesubmit}>Submit</button>
       </div>
  )
}

export default Login