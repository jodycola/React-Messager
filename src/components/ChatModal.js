import React, { useState } from 'react';
import { useContacts } from '../contexts/ContactsProvider';
import { useChats } from '../contexts/ChatsProvider';
import { Modal, Form, Button } from 'react-bootstrap';

function ChatModal({ closeModal }) {
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const { contacts } = useContacts();
    const { createChat } = useChats();

    function handleCheckBoxChange(contactId) {
        setSelectedContactIds(prevSelectedContactIds => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            } else {
                return [...prevSelectedContactIds, contactId]
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        createChat(selectedContactIds);
        closeModal();

    }

    return (
        <>
            <Modal.Header closeButton> Start Chat </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => ( 
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckBoxChange(contact.id)}
                            />
                        </Form.Group>
                    ))}
                    <Button type="submit"> Create Contact </Button>
                </Form>
            </Modal.Body>
        </>
    )
}

export default ChatModal;