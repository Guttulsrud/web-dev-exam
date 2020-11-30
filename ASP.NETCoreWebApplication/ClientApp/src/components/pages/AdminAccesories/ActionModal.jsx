import React, {useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {EntityContext} from '../../../context/EntityContext';

const ActionModal = ({show, edit, id, name, handleClose, handleName}) => {
    const {fetchData} = useContext(EntityContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        edit ? axios.put(`https://localhost:5001/accessory/edit`, {id, name}).then(fetchData).then(() => handleClose())
            : axios.post('https://localhost:5001/accessory/create', {name}).then(fetchData).then(() => handleClose());

    };

    const handleDelete = async () => axios.delete(`https://localhost:5001/accessory/delete/${id}`).then(fetchData).then(() => handleClose());

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{edit ? 'Edit accessory' : 'Add new accessory'}</Modal.Title>
            </Modal.Header>
            <Form className='text-left' onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>
                            Name
                        </Form.Label>
                        <Form.Control type='text' placeholder={edit ? name : 'Enter name'} value={name}
                                      onChange={(e) => handleName(e.target.value)}/>
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
                    <Button variant='primary' type={'submit'}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};
export default ActionModal;
