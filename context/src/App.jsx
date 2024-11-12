import React from 'react'
import Login from './component/login'
import Profile from './component/profile'
import UserContextProvider from './context/userContextProvider'

function App() {
  return (
           <UserContextProvider>
            <h1>Ali Hassan</h1>
            <Login/>
            <Profile/>
           </UserContextProvider>
  )
}

export default App