import React, {useContext, useState} from 'react';
import PsLoading from '../../Loading';
import Table from 'react-bootstrap/Table';
import {EntityContext} from '../../../context/EntityContext';
import {TableImage} from './style';

const GamesList = ({handleEdit}) => {
    const {entities, loading} = useContext(EntityContext)

    const generateGames = () => {
        return entities[0].map((game, key) => (
            <tr className='text-left' key={key} onClick={() => handleEdit(game)}>
                <td >{game.title}</td>
                <td>{game.category}</td>
                <td><TableImage src={game.gameBoxImage} alt={"box art"}/></td>
                <td>{game.isFeatured}</td>
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
                        <th className='text-left'>Title</th>
                        <th className='text-left'>Category</th>
                        <th className='text-left'>Box Art</th>
                        <th className='text-left'>Featured</th>
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