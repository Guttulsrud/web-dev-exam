import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import AccessoriesList from '../components/pages/AdminAccesories/AccessoryList';
import ActionModal from '../components/pages/AdminAccesories/ActionModal';
import {EntityProvider} from '../context/EntityContext';

export const AdminAccessories = () => {

    const [name, setName] = useState('');
    const [id, setId] = useState(false);
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);

    const handleClose = () => setShow(false);

    const handleEdit = (accessory) => {
        setId(accessory.id);
        setName(accessory.name);
        setShow(true);
        setEdit(true);
    };
    const handleAdd = () => {
        setShow(true);
        setEdit(false);
        setName('');
    };

    return (
        <EntityProvider endpoint={"accessory"}>
            <ActionModal show={show} edit={edit} id={id} name={name} handleName={setName} handleClose={handleClose} />
            <div className={'d-flex justify-content-between align-content-center align-items-center mt-5 mb-3'}>
                <h1 style={{lineHeight: '0px'}}>Accessories</h1>
                <Button onClick={handleAdd}>Add accessory</Button>
            </div>
            <AccessoriesList handleEdit={handleEdit}/>
        </EntityProvider>
    );
};
