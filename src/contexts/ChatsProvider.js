import React, { useState, useContext } from 'react';
import { useContacts } from './ContactsProvider';
import useLocalStorage from '../hooks/useLocalStorage';


const ChatsContext = React.createContext();

export function useChats() {
    return useContext(ChatsContext)
}

export function ChatsProvider({ id, children }) {
    const [chats, setChats] = useLocalStorage('chats', [])
    const [selectedChatIndex, setSelectedChatIndex] = useState(0)
    const { contacts } = useContacts()

    function createChat(recipients) {
        setChats(prevChats => {
            return [...prevChats, { recipients, messages: []  }]
        })
    }

    function addMessageToChat({ recipients, text, sender }) {
        setChats(prevChats => {
            let madeChange = false
            const newMessage = { sender, text }
            const newChats = prevChats.map(chat => {
                if (arrayEquality(chat.recipients, recipients)) 
                {
                    madeChange = true
                    return { ...chat, messages: [...chat.messages, newMessage] }
                }
                return chat
            })
            if (madeChange) {
                return newChats
            } else {
                return [...prevChats, { recipients, messages: [newMessage] }]
            }
        })
    }

    function sendMessage(recipients, text) {
        addMessageToChat({ recipients, text, sender: id })
    }

    const formatChats = chats.map((chat, index) => {
        const recipients = chat.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient
            })
            const name = ( contact && contact.name) || recipient
            return { id: recipient, name }
        })
        const messages = chat.messages.map(message => {
            const contact = contacts.find(contact => {
                return contact.id === message.sender
            })
            const name = ( contact && contact.name) || message.sender
            const fromMe = id === message.sender
            return { ...message, senderName: name, fromMe}
        })
        const selected = index === selectedChatIndex
        return { ...chats, messages, recipients, selected }
    })

    const value = {
        chats: formatChats,
        selectedChat: formatChats[selectedChatIndex],
        selectChatIndex: setSelectedChatIndex,
        sendMessage,
        createChat
    }

    return (
        <ChatsContext.Provider value={value}>
            {children}
        </ChatsContext.Provider>
    )
}

function arrayEquality(a, b) {
    if (a.length !== b.length) return false
    
    a.sort()
    b.sort()

    return a.every((element, index) => {
        return element === b[index]
    })
}

// Try to make a redux store if not just pass the props and omit useContext