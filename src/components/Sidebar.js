import React, { useState } from 'react';
import Chats from './Chats';
import Contacts from './Contacts';
import ChatModal from './ChatModal';
import ContactModal from './ContactModal';
import { Button, Tab, Nav, Modal } from 'react-bootstrap';

function Sidebar({ user }) {
    const [activeKey, setActiveKey] = useState("chats")
    const [showModal, setShowModal] = useState(false)
    const chatOpen = activeKey === "chats"

    function closeModal(){
        setShowModal(!showModal)
    }

    return (
        <div className="sidebar">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link eventKey="chats"> Chats </Nav.Link>
                    </Nav.Item>
                
                    <Nav.Item>
                        <Nav.Link eventKey="contacts"> Contacts </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="chats">
                        <Chats />
                    </Tab.Pane>

                    <Tab.Pane eventKey="contacts">
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="sidebar-button">
                    <Button onClick={() => setShowModal(!showModal)}> New {chatOpen ? 'Chats' : 'Contact'}</Button>
                </div>
            </Tab.Container>

            <Modal show={showModal} onHide={closeModal}>
                {chatOpen ?
                    <ChatModal closeModal={closeModal} /> :
                    <ContactModal closeModal={closeModal}  />
                }
            </Modal>
        </div>
    )
}

export default Sidebar;