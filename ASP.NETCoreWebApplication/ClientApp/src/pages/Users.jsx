import React, {useState, useEffect} from 'react';

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState([]);
    const [privileges, setPrivileges] = useState([]);
    const [show, setShow] = useState(false);
    const axios = require('axios');

    let loading = false;
  

    const handleSubmit = async () => {
        //SetLoading = true => Få på no kul loading animation

        axios.post('https://localhost:5001/user/create', {name, privileges}).then(() => {
            
            //SetLoading = false.
            handleClose();
        })
        
    };


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleEdit = () => {
        console.log("njee")
    }

    useEffect(() => {

        const url = 'https://localhost:5001/user'
        axios.get(url).then(res => {
            setUsers(res.data);
        });
    }, [])


    const list = () => {
        return users.map((user, key) => (
            <tr className="text-left" key={key}>
                <td>{user.name}</td>
                <td>{user.privileges}</td>
                <td>
                    <Badge variant="primary" className="mr-1" onClick={handleEdit}>Edit</Badge>
                    <Badge variant="secondary">Delete</Badge>
                </td>
            </tr>
        ));
    };


    return (
        <React.Fragment>
            {
                <Container  className="mt-5 pt-5">
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add new user</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form className="text-left">
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Enter name"
                                                  onChange={(e) => setName(e.target.value)}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Example select</Form.Label>
                                    <Form.Control as="select" onChange={(e) => setPrivileges(e.target.value)}>
                                        <option>Read access</option>
                                        <option>Write access</option>
                                        <option>All</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleSubmit}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Button className="mt-4" onClick={handleShow}>Add user</Button>

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th className="text-left">Name</th>
                            <th className="text-left">Privileges</th>
                            <th className="text-left">Edit</th>
                        </tr>
                        </thead>
                        <tbody>
                        {list()}
                        </tbody>
                    </Table>
                </Container>

            }
        </React.Fragment>
    );
};
