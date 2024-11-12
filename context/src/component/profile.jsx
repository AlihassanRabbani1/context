import React, { useContext } from 'react'
import userContext from '../context/userContext'

function Profile() {
    const {user} = useContext(userContext);
    if(!user)

        return  <div>Please login</div>

          
           return  <div>Welcome{user.userName} &{user.password}</div>
          

    }

export default Profile