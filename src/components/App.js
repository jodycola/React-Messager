import React, { useState } from 'react'
import Login from './Login'

function App() {
  const [user, setUser] = useState()

  return (
    <div className="main">
        {user}
        
        <Login 
          userLogin={setUser}
        />
    </div>
  );
}

export default App;
