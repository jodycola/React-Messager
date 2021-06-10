import React, { useState } from 'react';
import Chats from './Chats';
import Contacts from './Contacts';
import ChatModal from './ChatModal';
import ContactModal from './ContactModal';
import { Button, Tab, Nav, Modal } from 'react-bootstrap';

function Sidebar({ id }) {
    const [activeKey, setActiveKey] = useState("chats")
    const [showModal, setShowModal] = useState(false)
    const chatOpen = activeKey === "chats"

    function closeModal(){
        setShowModal(!showModal)
    }

    return (
        <div className="d-flex flex-column" style={{ width: "250px" }}>
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey="chats"> Chats </Nav.Link>
                    </Nav.Item>
                
                    <Nav.Item>
                        <Nav.Link eventKey="contacts"> Contacts </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="border-right overflow-auto flex-grow-1">
                    <Tab.Pane eventKey="chats">
                        <Chats />
                    </Tab.Pane>

                    <Tab.Pane eventKey="contacts">
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border-top border-right small">
                    Your Id: <span className="text-muted">{id}</span>
                </div>
                <Button className="rounded=0" onClick={() => setShowModal(!showModal)}> New {chatOpen ? 'Chats' : 'Contact'}</Button>
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