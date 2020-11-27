import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import PsLogo from '../../layouts/Header/PsLogo';
import Input from '../../common/Input';
import {Button} from '../../base/Button';


const LoginSection = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
    };

    return (
        <Card className={'m-auto p-5'}>
            <div className={"mx-auto mb-2"}>
            <PsLogo color={username !== "" && password !== "" ? "#0072ce" : undefined}/>
            </div>

            <Card.Body className={'px-5'}>
                <Form onSubmit={(e) => handleOnSubmit(e)}>
                    <Input label={"Username"} type={'text'} value={username}
                                  onChange={(e) => setUsername(e.target.value)}/>
                    <Input label={"Password"} type={'password'} value={password}
                                  onChange={(e) => setPassword(e.target.value)} className={"mt-4"}/>
                    <Button type={'submit'} className={'mt-4 w-100'} disabled={username === "" || password === ""}>
                        Log in
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default LoginSection;