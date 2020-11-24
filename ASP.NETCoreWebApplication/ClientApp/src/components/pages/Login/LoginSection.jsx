import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginSection = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(username)
        console.log(password)
    };

    return (
        <Card className={'m-auto p-5'}>
            <h3>
               Sign in
            </h3>
            <Card.Body className={"p-0"}>
                <Form onSubmit={(e) => handleOnSubmit(e)}>
                    <Form.Label className={"mt-2"}>
                        Username
                    </Form.Label>
                    <Form.Control placeholder={'Username'} type={'text'} value={username}
                                  onChange={(e) => setUsername(e.target.value)}/>
                    <Form.Label className={"mt-4"}>
                        Password
                    </Form.Label>
                    <Form.Control placeholder={'Password'} type={'password'} value={password}
                                  onChange={(e) => setPassword(e.target.value)}/>
                    <Button type={'submit'} className={"mt-4 w-100"}>
                        Log in
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default LoginSection;