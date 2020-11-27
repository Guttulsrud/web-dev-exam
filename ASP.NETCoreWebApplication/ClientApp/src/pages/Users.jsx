import React, {useState, useEffect} from 'react';

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import Link from "react-router-dom/Link";

export const Users = () => {
    const axios = require('axios');

    const [users, setUsers] = useState([]);
    const [name, setName] = useState([]);
    const [id, setId] = useState(false);
    const [privileges, setPrivileges] = useState('Read access');
    
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleEdit = (user) => {
        setId(user.id);
        setName(user.name);
        setPrivileges(user.privileges);
        setShow(true);
        setEdit(true);
    }
    const handleAdd = () => {
        setShow(true);
        setEdit(false);
        setName("");
    }
    
    useEffect(() => {
        const url = 'https://localhost:5001/user'
        axios.get(url).then(res => {
            setUsers(res.data);
        });
    }, [users])


    const handleSubmit = async () => {
        //SetLoading = true => Få på no kul loading animation
    
        
        console.log(privileges)
        edit ? axios.put(`https://localhost:5001/user/edit`, {id, name, privileges}).then(() => handleClose())
            : axios.post('https://localhost:5001/user/create', {name, privileges}).then(() => handleClose())

    }

    const handleDelete = async () => axios.delete(`https://localhost:5001/user/delete/${id}`).then(() => handleClose());


    const list = () => {
        return users.map((user, key) => (
            <tr className="text-left" key={key} onClick={() => handleEdit(user)}>
                <td>{user.name}</td>
                <td>{user.privileges}</td>
            </tr>
        ));
    };


    
    return (
                <Container  className="mt-5 pt-5">

                    <Link to={"/"}>Back</Link>


                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{edit ? 'Edit user' : 'Add new user'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form className="text-left">
                                <Form.Group>
                                    <Form.Control type="text" placeholder={edit ? name : "Enter name"} value={name}
                                                  onChange={(e) => setName(e.target.value)}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Example select</Form.Label>
                                    <Form.Control as="select"
                                                  placeholder={edit ? privileges : "Read access"} 
                                                  onChange={(e) => setPrivileges(e.target.value)}
                                                  value={privileges}>
                                        <option value='Read access'>Read access</option>
                                        <option value='Write access'>Write access</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleDelete}>
                                Delete
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Button className="mt-4" onClick={handleAdd}>Add user</Button>

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th className="text-left">Name</th>
                            <th className="text-left">Privileges</th>
                        </tr>
                        </thead>
                        <tbody>
                        {list()}
                        </tbody>
                    </Table>
                </Container>
    );
};
