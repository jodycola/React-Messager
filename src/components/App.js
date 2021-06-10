import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  const [user, setUser] = useLocalStorage('user')

  return (
    <div className="main">
        {user ? <Dashboard user={user} setUser={setUser} /> : <Login userLogin={setUser}/> }
    </div>
  );
}

export default App;
