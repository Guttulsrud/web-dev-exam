import React, {useContext, useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {EntityContext} from '../../../context/EntityContext';

const ActionModal = ({show, edit, id, name, description, game, handleClose, handleName, handleDescription, handleGame}) => {
    const {fetchData} = useContext(EntityContext);
    const [games, setGames] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        edit ? axios.put(`https://localhost:5001/character/edit`, {id, name, description, game}).then(fetchData).then(() => handleClose())
            : axios.post('https://localhost:5001/character/create', {name, description, game}).then(fetchData).then(() => handleClose());

    };
    
    
    useEffect(() => {
        axios.get('https://localhost:5001/game').then(res => {
            let titles = [];
            
            for(let game of res.data) {
                titles.push(game.title)
            }
            setGames(titles)
        })
    },[])
    
    const generateGameOptions = () => {
        return games.map((game, idx) => {
            return <option key={idx} value={game}>{game}</option>
        })
    }

    const handleDelete = async () => axios.delete(`https://localhost:5001/character/delete/${id}`).then(fetchData).then(() => handleClose());

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{edit ? 'Edit character' : 'Add new character'}</Modal.Title>
            </Modal.Header>
            <Form className='text-left' onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>
                            Name
                        </Form.Label>
                        <Form.Control type='text' placeholder={edit ? name : 'Enter name'} value={name}
                                      onChange={(e) => handleName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Description
                        </Form.Label>
                        <Form.Control type='text' placeholder={edit ? description : 'Enter description'} value={description}
                                      onChange={(e) => handleDescription(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Game
                        </Form.Label>
                        <Form.Control as="select" 
                                      onChange={(e) => handleGame(e.target.value)}
                                      value={game}
                        >
                            {generateGameOptions()}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Image
                        </Form.Label>
                        <input type="file"/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    {edit &&
                    <Button variant='danger' onClick={handleDelete}>
                        Delete
                    </Button>
                    }
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' type={'submit'}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};
export default ActionModal;
