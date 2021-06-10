import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import useLocalStorage from '../hooks/useLocalStorage';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ChatsProvider } from '../contexts/ChatsProvider';

function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <ChatsProvider id={id}>
        <Dashboard id={id} />
      </ChatsProvider>
    </ContactsProvider>
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
