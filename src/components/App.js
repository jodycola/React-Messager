import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import useLocalStorage from '../hooks/useLocalStorage';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ChatsProvider } from '../contexts/ChatsProvider';
import { SocketProvider } from '../contexts/SocketProvider';

function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ChatsProvider id={id}>
          <Dashboard id={id} />
        </ChatsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    <div className="main">
        {id ? 
        dashboard
        : 
        <Login userLogin={setId}/> }
    </div>
  );
}

export default App;
