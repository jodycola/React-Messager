import React, { useContext } from 'react';
import { useContacts } from './ContactsProvider';
import useLocalStorage from '../hooks/useLocalStorage';


const ChatsContext = React.createContext();

export function useChats() {
    return useContext(ChatsContext)
}

export function ChatsProvider({ children }) {
    const [chats, setChats] = useLocalStorage('chats', [])
    const { contacts } = useContacts()

    function createChat(recipients) {
        setChats(prevChats => {
            return [...prevChats, { recipients, messagers: []  }]
        })
    }

    const formatChats = chats.map(chat => {
        const recipients = chat.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient
            })
            const name = ( contact && contact.name) || recipient
            return { id: recipient, name }
        })
        return { ...chats, recipients }
    })

    return (
        <ChatsContext.Provider value={{ chats: formatChats, createChat }}>
            {children}
        </ChatsContext.Provider>
    )
}

// Try to make a redux store if not just pass the props and omit useContext