import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function Login({ userLogin }) {
    const user = useRef();

    function handleSubmit(e) {
        e.preventDefault()
        userLogin(user.current.value)
    }

    return (
        <div className="login">
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label> Enter Your Username </Form.Label>
                        <Form.Control type="text" ref={user} required />
                    </Form.Group>
                    <Button type="submit"> Login </Button>
                    <Button variant="secondary"> Signup </Button>
                </Form>
            </Container>
        </div>
    );
}

export default Login;
