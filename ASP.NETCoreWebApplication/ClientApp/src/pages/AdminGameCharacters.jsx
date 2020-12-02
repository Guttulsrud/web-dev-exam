import React, {useState} from 'react';
import {EntityProvider} from '../context/EntityContext';
import ActionModal from '../components/pages/AdminCharacters/ActionModal';
import Button from 'react-bootstrap/Button';
import CharacterList from '../components/pages/AdminCharacters/CharacterList';
import {characterModel} from '../models/characterModel';

export const AdminGameCharacters = () => {
    const [id, setId] = useState(false);
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [character, setCharacter] = useState(characterModel);

    const handleChange = e => {
        const {name, value} = e.target;
        setCharacter(prevState => ({...prevState, [name]: value}));
    };

    const handleClose = () => setShow(false);

    const handleEdit = (character) => {
        setId(character.id);
        setCharacter(character)
        /*setName(character.name);
        setDescription(character.description);
        setImage(character.image);
        setGame(character.game);*/
        setShow(true);
        setEdit(true);
    };
    const handleAdd = () => {
        setCharacter(characterModel)
        setShow(true);
        setEdit(false);

    };



    return (
        <EntityProvider endpoint={'character'}>
            <ActionModal show={show}
                         edit={edit}
                         id={id}
                         character={character}
                         handleChange={handleChange}
                         handleClose={handleClose}/>
            <div className={'d-flex justify-content-between align-content-center align-items-center mt-5 mb-3'}>
                <h1 style={{lineHeight: '0px'}}>Characters</h1>
                <Button onClick={handleAdd}>Add character</Button>
            </div>
            <CharacterList handleEdit={handleEdit}/>
        </EntityProvider>
    );

};