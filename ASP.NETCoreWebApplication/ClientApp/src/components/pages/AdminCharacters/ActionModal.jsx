import React, {useContext, useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {EntityContext} from '../../../context/EntityContext';
import {handleImageChange, uploadImages} from '../../../helpers/imageUpload';

const ActionModal = ({show, edit, id, character,  handleClose, handleChange}) => {
    const {fetchData} = useContext(EntityContext);
    const [games, setGames] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
         uploadImages(character);
        edit ? axios.put(`https://localhost:5001/character/edit`, character).then(fetchData).then(() => handleClose())
            : axios.post('https://localhost:5001/character/create', character).then(fetchData).then(() => handleClose());
    };



    useEffect(() => {
        axios.get('https://localhost:5001/game').then(res => {
            let titles = [];

            for (let game of res.data) {
                titles.push(game.title);
            }
            setGames(titles);
        });
    }, []);

    const generateGameOptions = () => {
        return games.map((game, idx) => {
            return <option key={idx} value={game}>{game}</option>;
        });
    };

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
                        <Form.Control name={"name"} type='text' placeholder={'Enter name'} value={character.name}
                                      onChange={(e) => handleChange(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Description
                        </Form.Label>
                        <Form.Control name={"description"} type='text' placeholder={'Enter description'}
                                      value={character.description}
                                      onChange={(e) => handleChange(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Game
                        </Form.Label>
                        <Form.Control name={"game"}
                                      as='select'
                                      onChange={(e) => handleChange(e)}
                                      defaultValue={edit ? character.game : ''}
                        >
                            <option value='' disabled hidden>Select a game</option>
                            {generateGameOptions()}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Image
                        </Form.Label>
                        <input name={"image"} type='file' onChange={handleImageChange}/>
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
