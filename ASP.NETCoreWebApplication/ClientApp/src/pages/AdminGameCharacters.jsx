import React, {useState} from 'react';
import {EntityProvider} from "../context/EntityContext";
import ActionModal from "../components/pages/AdminCharacters/ActionModal";
import Button from "react-bootstrap/Button";
import CharacterList from "../components/pages/AdminCharacters/CharacterList";

export const AdminGameCharacters = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [game, setGame] = useState('');
    const [id, setId] = useState(false);
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);

    const handleClose = () => setShow(false);

    const handleEdit = (character) => {
        setId(character.id);
        setName(character.name);
        setDescription(character.description);
        setImage(character.image);
        setGame(character.game);
        setShow(true);
        setEdit(true);
    };
    const handleAdd = () => {
        setShow(true);
        setEdit(false);
        setName('');
    };

    return (
        <EntityProvider endpoint={"character"}>
            <ActionModal show={show} 
                         edit={edit} 
                         id={id} 
                         name={name}
                         description={description}
                         game={game}
                         image={image}
                         handleName={setName} 
                         handleDescription={setDescription} 
                         handleGame={setGame} 
                         handleImage={setImage} 
                         handleClose={handleClose} />
            <div className={'d-flex justify-content-between align-content-center align-items-center mt-5 mb-3'}>
                <h1 style={{lineHeight: '0px'}}>Characters</h1>
                <Button onClick={handleAdd}>Add character</Button>
            </div>
            <CharacterList handleEdit={handleEdit}/>
        </EntityProvider>
    );
    
};