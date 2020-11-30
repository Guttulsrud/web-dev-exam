import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import {EntityProvider} from '../context/EntityContext';
import GamesModal from '../components/pages/AdminGames/GamesModal';
import GamesList from '../components/pages/AdminGames/GamesList';
import {gameModel} from '../models/gameModel';

export const AdminGames = (props) => {
    const [id, setId] = useState()
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [game, setGame] = useState(gameModel);


    const handleChange = e => {
        const {name, value} = e.target
        setGame(prevState => ({...prevState, [name]: value}))
        console.log(e.target.value)
    }

    const handleClose = () => setShow(false);

    const handleEdit = (game) => {
        setGame(game)
        setId(game.id);
        setShow(true);
        setEdit(true);
    };

    const handleAdd = (e) => {
        setGame(gameModel)
        setShow(true);
        setEdit(false);
    };

    return (
        <EntityProvider endpoint={"game"}>
            <GamesModal show={show} edit={edit} id={id} game={game} handleClose={handleClose} handleChange={handleChange}/>
            <div className={'d-flex justify-content-between align-content-center align-items-center mt-5 mb-3'}>
                <h1 style={{lineHeight: '0px'}}>Games</h1>
                <Button onClick={handleAdd}>Add game</Button>
            </div>
            <GamesList handleEdit={handleEdit}/>
        </EntityProvider>
    );
}


