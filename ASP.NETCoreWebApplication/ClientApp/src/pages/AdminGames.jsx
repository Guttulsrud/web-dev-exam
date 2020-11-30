import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'
import axios from 'axios';
import {EntityProvider} from '../context/EntityContext';
import ActionModal from '../components/pages/AdminAccesories/ActionModal';
import AccessoriesList from '../components/pages/AdminAccesories/AccessoryList';
import GamesModal from '../components/pages/AdminGames/GamesModal';
import GamesList from '../components/pages/AdminGames/GamesList';

export const AdminGames = (props) => {
    const [id, setId] = useState()
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [game, setGame] = useState({
        'title': "",
        'name': "",
        'category': "",
        'subtitle': "",
        'description': "",
        'description2': "",
        'featureImage': "",
        'featureVideo': "",
        'gameBoxImage': "",
        'trailerLink': "",
        'price': "",
        'backgroundImage': "",
        'gameLogo': "",
        'favorites': "",
        'developer': "",
        'publisher': "",
        'year': "",
        'screenshots': "",
        'isDark': false,
        'isFeatured': false,
    });

    const handleChange = e => {
        game[e.target.id] = e.target.value
        console.log(game[e.target.id])
    }

    const handleCheckBox = e => {
        game[e.target.id] = e.target.checked
        console.log(game[e.target.id])
    }

    const handleClose = () => setShow(false);

    const handleEdit = (game) => {
        setGame(game)
        setId(game.id);
        setShow(true);
        setEdit(true);
    };

    const handleAdd = () => {
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


