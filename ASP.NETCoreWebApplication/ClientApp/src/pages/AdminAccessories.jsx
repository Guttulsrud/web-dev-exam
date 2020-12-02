import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import AccessoriesList from '../components/pages/AdminAccesories/AccessoryList';
import ActionModal from '../components/pages/AdminAccesories/ActionModal';
import {EntityProvider} from '../context/EntityContext';
import {accessoryModel} from '../models/accessoryModel';

export const AdminAccessories = () => {
    const [accessory, setAccessory] = useState(accessoryModel);
    const [id, setId] = useState(false);
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);

    const handleClose = () => setShow(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setAccessory(prevState => ({...prevState, [name]: value}));
    };

    const handleEdit = (accessory) => {
        setId(accessory.id);
        setAccessory(accessory)
        setShow(true);
        setEdit(true);
    };
    const handleAdd = () => {
        setAccessory(accessoryModel)
        setShow(true);
        setEdit(false);

    };

    return (
        <EntityProvider endpoint={'accessory'}>
            <ActionModal show={show} edit={edit} id={id} accessory={accessory} handleChange={handleChange}  handleClose={handleClose}/>
            <div className={'d-flex justify-content-between align-content-center align-items-center mt-5 mb-3'}>
                <h1 style={{lineHeight: '0px'}}>Accessories</h1>
                <Button onClick={handleAdd}>Add accessory</Button>
            </div>
            <AccessoriesList handleEdit={handleEdit}/>
        </EntityProvider>
    );
};
