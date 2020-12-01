import React, {useContext} from 'react';
import {EntityContext} from '../../../context/EntityContext';
import PsLoading from '../../Loading';
import Table from 'react-bootstrap/Table';

const CharacterList = ({handleEdit}) => {
    const {entities, loading} = useContext(EntityContext);

    const generateCharacters = () => {
        return entities[0].map((character, key) => (
            <tr className='text-left' key={key} onClick={() => handleEdit(character)}>
                <td>{character.name}</td>
                <td>{character.description}</td>
                <td>{character.game}</td>
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
                        <th className='text-left'>Desc</th>
                        <th className='text-left'>Game</th>
                    </tr>
                    </thead>
                    <tbody>
                    {generateCharacters()}
                    </tbody>
                </Table>
            }
        </React.Fragment>
    );
};

export default CharacterList;