import React, {useContext} from 'react';
import {EntityContext} from '../../../context/EntityContext';
import PsLoading from '../../Loading';
import Table from 'react-bootstrap/Table';

const AccessoryList = ({handleEdit}) => {
    const {entities, loading} = useContext(EntityContext);

    const generateAccessories = () => {
        return entities[0].map((accessory, key) => (
            <tr className='text-left' key={key} onClick={() => handleEdit(accessory)}>
                <td>{accessory.name}</td>
            </tr>
        ));
    };

    return (
        <React.Fragment>
            {loading ? <PsLoading/> :
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th className='text-left'>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {generateAccessories()}
                    </tbody>
                </Table>
            }
        </React.Fragment>
    );
};

export default AccessoryList;