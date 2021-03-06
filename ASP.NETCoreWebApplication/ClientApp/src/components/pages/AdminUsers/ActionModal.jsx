import React, {useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {EntityContext} from '../../../context/EntityContext';
import PropTypes from 'prop-types';

const ActionModal = ({
                         show,
                         edit,
                         id,
                         name,
                         username,
                         password,
                         privileges,
                         handleClose,
                         handleName,
                         handlePrivileges,
                         handleUsername,
                         handlePassword
                     }) => {
    const {fetchData} = useContext(EntityContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        edit ? axios.put(`https://localhost:5001/user/edit`, {
                id,
                name,
                privileges,
                username,
                password
            }).then(fetchData).then(() => handleClose())
            : axios.post('https://localhost:5001/user/create', {
                name,
                privileges,
                username,
                password
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
                        <Form.Label>Username (email)</Form.Label>
                        <Form.Control type='text' placeholder={edit ? username : 'Enter username'} value={username}
                                      onChange={(e) => handleUsername(e.target.value)}/>
                    </Form.Group>
                    {!edit &&
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder={'Password'} value={password}
                                      onChange={(e) => handlePassword(e.target.value)}/>
                    </Form.Group>
                    }
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
                    <Button variant='primary' type={'submit'}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

ActionModal.propTypes = {
    id: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    privileges: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleName: PropTypes.func.isRequired,
    handlePrivileges: PropTypes.func.isRequired,
    handleUsername: PropTypes.func.isRequired,
    handlePassword: PropTypes.func.isRequired,
    edit: PropTypes.bool,
}

export default ActionModal;