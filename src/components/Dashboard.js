import React from 'react';
import Sidebar from './Sidebar';
import DisplayChat from './DisplayChat';
import { useChats } from '../contexts/ChatsProvider';

function Dashboard({ id, setId }) {
    const { selectedChat } = useChats()

    return (
        <div className="d-flex" style={{ height: '100vh' }}>
            <Sidebar id={id} />
            { selectedChat ? <DisplayChat /> : null}
        </div>
    )
}

export default Dashboard;