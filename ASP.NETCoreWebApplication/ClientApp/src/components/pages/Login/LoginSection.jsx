import React, {useContext, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import PsLogo from '../../layouts/Header/PsLogo';
import Input from '../../common/Input';
import {Button} from '../../base/Button';
import {useHistory} from 'react-router';
import {ErrorText} from './style';
import {AuthContext} from '../../../context/AuthContext';


const LoginSection = () => {
    const {handleLogin} = useContext(AuthContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const history = useHistory()
    const axios = require('axios');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://localhost:5001/user/login`, {username, password}).then(res => {
            
            if (res.data) {
                handleLogin(true)
                history.push("/admin")
            } else {
                //Wrong pass or username. Display error
                setError(true)
            }
        })
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
                    {error && <ErrorText>Wrong username or password</ErrorText>}
                    <Button type={'submit'} className={'mt-4 w-100'} disabled={username === "" || password === ""}>
                        Log in
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default LoginSection;