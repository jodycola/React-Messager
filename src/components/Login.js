import React, { useRef } from 'react';
import { v4 } from 'uuid';
import { Button, Container, Form } from 'react-bootstrap';

function Login({ userLogin }) {
    const idRef = useRef();

    function handleSubmit(e) {
        e.preventDefault()
        userLogin(idRef.current.value)
    }

    function handleSignup(){
        userLogin(v4())
    }

    return (
        <div className="login">
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label> Enter Your Username </Form.Label>
                        <Form.Control type="text" ref={idRef} required />
                    </Form.Group>
                    <Button type="submit"> Login </Button>
                    <Button onClick={handleSignup} variant="secondary"> Signup </Button>
                </Form>
            </Container>
        </div>
    );
}

export default Login;
