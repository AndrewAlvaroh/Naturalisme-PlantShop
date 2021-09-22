import React from 'react'
import Routter from './routes/Routter'
import { UserProvider } from './context/UserContext';


function App() {
  return (
    <div>
      <UserProvider>
        <Routter />
      </UserProvider>
    </div>
  )
}

export default App
