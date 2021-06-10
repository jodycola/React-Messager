import React from 'react';
import { useChats } from '../contexts/ChatsProvider';
import { ListGroup } from 'react-bootstrap';

function Chats() {
    const { chats, selectChatIndex } = useChats()
    
    return (
        <ListGroup variant="flush">
            {chats.map((chat, index) => (
                <ListGroup.Item 
                    key={index}
                    action
                    onClick={() => selectChatIndex(index)}
                    active={chat.selected}
                >
                    {chat.recipients.map(recipient => recipient.name).join(', ')}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default Chats;