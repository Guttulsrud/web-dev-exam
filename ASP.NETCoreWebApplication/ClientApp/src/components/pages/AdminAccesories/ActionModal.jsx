import React, {useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {EntityContext} from '../../../context/EntityContext';
import {handleImageChange, uploadImages} from '../../../helpers/imageUpload';

const ActionModal = ({show, edit, id, accessory, handleClose, handleChange}) => {
    const {fetchData} = useContext(EntityContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        uploadImages(accessory)
        edit ? axios.put(`https://localhost:5001/accessory/edit`, accessory ).then(fetchData).then(() => handleClose())
            : axios.post('https://localhost:5001/accessory/create',accessory).then(fetchData).then(() => handleClose())

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
                        <Form.Control name={"name"} type='text' placeholder={'Enter name'} value={accessory.name}
                                      onChange={(e) => handleChange(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Description
                        </Form.Label>
                        <Form.Control name={"description"} type='text' placeholder={'Enter name'} value={accessory.description}
                                      onChange={(e) => handleChange(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Image
                        </Form.Label>
                        <input name={"image"} type='file' onChange={handleImageChange}/>
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
