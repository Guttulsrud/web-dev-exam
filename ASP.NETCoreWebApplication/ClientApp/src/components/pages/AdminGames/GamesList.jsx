import React, {useContext, useState} from 'react';
import PsLoading from '../../Loading';
import Table from 'react-bootstrap/Table';
import {EntityContext} from '../../../context/EntityContext';

const GamesList = ({handleEdit}) => {
    const {entities, loading} = useContext(EntityContext)

    const generateGames = () => {
        return entities[0].map((game, key) => (
            <tr className='text-left' key={key} onClick={() => handleEdit(game)}>
                <td>{game.title}</td>
                <td>{game.category}</td>
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
                        <th className='text-left'>Category</th>
                        <th className='text-left'>Box Art</th>
                    </tr>
                    </thead>
                    <tbody>
                    {generateGames()}
                    </tbody>
                </Table>
        }
        </React.Fragment>
    )
}

export default  GamesList