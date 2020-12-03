import React, {useContext} from 'react';
import Table from 'react-bootstrap/Table';
import {EntityContext} from '../../../context/EntityContext';
import PsLoading from '../../Loading';
import PropTypes from 'prop-types';

const UsersList = ({handleEdit}) => {
    const {entities, loading} = useContext(EntityContext);

    const generateUsers = () => {
        return entities[0].map((user, key) => (
            <tr className='text-left' key={key} onClick={() => handleEdit(user)}>
                <td>{user.name}</td>
                <td>{user.privileges}</td>
            </tr>
        ));
    };
    return (
        <React.Fragment>
            {
                loading ? <PsLoading/> :
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th className='text-left'>Name</th>
                            <th className='text-left'>Privileges</th>
                        </tr>
                        </thead>
                        <tbody>
                        {generateUsers()}
                        </tbody>
                    </Table>
            }
        </React.Fragment>
    );
};

UsersList.propTypes = {
    handleEdit: PropTypes.func.isRequired
}

export default UsersList;