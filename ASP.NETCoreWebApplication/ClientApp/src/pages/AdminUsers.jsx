import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {EntityProvider} from '../context/EntityContext';
import UsersList from '../components/pages/AdminUsers/UsersList';
import ActionModal from '../components/pages/AdminUsers/ActionModal';

export const AdminUsers = () => {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState('');
    const [id, setId] = useState(false);
    const [privileges, setPrivileges] = useState('Read access');

    const handleClose = () => setShow(false);

    const handleEdit = (user) => {
        setId(user.id);
        setName(user.name);
        setPrivileges(user.privileges);
        setShow(true);
        setEdit(true);
    };

    const handleAdd = () => {
        setShow(true);
        setEdit(false);
        setName("")
        setPrivileges("Read access")
    };

    return (
        <EntityProvider endpoint={'user'}>
            <ActionModal edit={edit} show={show} name={name} id={id} privileges={privileges} handleName={setName}
                         handlePrivileges={setPrivileges} handleClose={handleClose}/>
                <div className={'d-flex justify-content-between align-content-center align-items-center mt-5 mb-3'}>
                    <h1 style={{lineHeight: '0px'}}>Users</h1>
                    <Button onClick={handleAdd}>Add user</Button>
                </div>
                <UsersList handleEdit={handleEdit}/>
        </EntityProvider>
    );
};
