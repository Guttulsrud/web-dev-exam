import React, {useContext, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {EntityContext} from '../../../context/EntityContext';

const ActionModal = ({show, edit, id, name, privileges, handleClose, handleName, handlePrivileges}) => {
    const {fetchData} = useContext(EntityContext);

    const handleSubmit = async (e) => {
        e.preventDefault()
        edit ? axios.put(`https://localhost:5001/user/edit`, {
                id,
                name,
                privileges
            }).then(fetchData).then(() => handleClose())
            : axios.post('https://localhost:5001/user/create', {
                name,
                privileges
            }).then(fetchData).then(() => handleClose());
    };

    const handleDelete = async () => axios.delete(`https://localhost:5001/user/delete/${id}`).then(fetchData).then(() => handleClose());

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{edit ? 'Edit user' : 'Add new user'}</Modal.Title>
            </Modal.Header>
            <Form className='text-left' onSubmit={handleSubmit}>
            <Modal.Body>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder={edit ? name : 'Enter name'} value={name}
                                      onChange={(e) => handleName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Select role</Form.Label>
                        <Form.Control as='select'
                                      placeholder={edit ? privileges : 'Read access'}
                                      onChange={(e) => handlePrivileges(e.target.value)}
                                      value={privileges}>
                            <option value='Read access'>Read access</option>
                            <option value='Write access'>Write access</option>
                        </Form.Control>
                    </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                {edit &&
                <Button variant='danger' onClick={handleDelete}>
                    Delete
                </Button>
                }
                <Button variant='secondary' onClick={handleClose}>
                    Close
                </Button>
                <Button variant='primary' type={"submit"}>
                    Submit
                </Button>
            </Modal.Footer>
        </Form>
        </Modal>
    );
};

export default ActionModal;