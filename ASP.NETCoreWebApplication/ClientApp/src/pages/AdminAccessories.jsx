import React, {useState, useContext, useEffect} from 'react';
import axios from "axios"
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {UserContext} from '../context/UserContext';
import PsLoading from '../components/Loading';


export const AdminAccessories = () => {

    const [name, setName] = useState("");
    const [id, setId] = useState(false);
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false)
    const [temp, setTemp] = useState([])



    useEffect(() => {
        axios.get(`https://localhost:5001/accessory`).then(res => setTemp(res.data))
    },[]);
    
    const handleClose = () => setShow(false);

    const handleEdit = (accessory) => {
        setId(accessory.id);
        setName(accessory.name);
        setShow(true);
        setEdit(true);
    }
    const handleAdd = () => {
        setShow(true);
        setEdit(false);
        setName("");
    }

    const handleSubmit = async () => {
        //SetLoading = true => Få på no kul loading animation
        edit ? axios.put(`https://localhost:5001/accessory/edit`, {id, name}).then(() => handleClose())
            : axios.post('https://localhost:5001/accessory/create', {name}).then(() => handleClose())

    }

    const handleDelete = async () => axios.delete(`https://localhost:5001/accessory/delete/${id}`).then(() => handleClose());

    const generateUser = () => {
        return temp.map((accessory, key) => (

            <tr className="text-left" key={key} onClick={() => handleEdit(accessory)}>
                <td>{accessory.name}</td>
            </tr>
        ));
    };

    return (
        <div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{edit ? 'Edit accessory' : 'Add new accessory'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="text-left">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder={edit ? name : "Enter name"} value={name}
                                          onChange={(e) => setName(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {edit &&
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                    }
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className={"d-flex justify-content-between align-content-center align-items-center mt-5 mb-3"}>
                <h1 style={{lineHeight: "0px"}}>Accessories</h1>
                <Button onClick={handleAdd}>Add accessory</Button>
            </div>


            {loading ? <PsLoading/> :

                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th className="text-left">Name</th>
                    </tr>
                    </thead>
                    <tbody>

                    {generateUser()}
                    </tbody>
                </Table>

            }

        </div>
    );
};
