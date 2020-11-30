import React, {useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {EntityContext} from '../../../context/EntityContext';
import axios from 'axios';
import Row from 'react-bootstrap/Row';

const GamesModal = ({show, edit, game, id, handleClose, handleChange, handleCheckBox}) => {
    const categories = [
        'Action RPG',
        'Racing',
        '3D Platformer',
        'Adventure'
    ];

    const range = (start, end) => {
        const next = start < end ? 1 : -1;
        if (start === end)
            return [start];
        return [start, ...range(start + next, end)];
    };

    const {fetchData} = useContext(EntityContext);

    const handleForm = (e) => {
        e.preventDefault();
        const addUrl = 'https://localhost:5001/game/create';
        const editUrl = 'https://localhost:5001/game/edit';
        edit ?
            axios.put(editUrl, game).then(fetchData).then(() => handleClose()) :
            axios.post(addUrl, game).then(fetchData).then(() => handleClose());
    };

    const handleDelete = async () => axios.delete(`https://localhost:5001/game/delete/${id}`).then(fetchData).then(() => handleClose());

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{edit ? `Edit game` : 'Add new game'}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleForm}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control name='title' placeholder={'Title'} value={game.title}
                                      onChange={(e) => handleChange(e)}/>

                        <Form.Label>Category</Form.Label>
                        <Form.Control name='category' placeholder={'Category'} value={game.category} as='select'
                                      onChange={(e) => handleChange(e)}>
                            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                        </Form.Control>

                        <Form.Label>Subtitle</Form.Label>
                        <Form.Control name='subtitle' placeholder={'Subtitle'} value={game.subtitle}
                                      onChange={(e) => handleChange(e)}/>

                        <Form.Label>Description</Form.Label>
                        <Form.Control name='description' placeholder={'Description'} value={game.description}
                                      onChange={(e) => handleChange(e)}/>

                        <Form.Label>Description 2</Form.Label>
                        <Form.Control name='description2' placeholder={'Description 2'} value={game.description2}
                                      onChange={(e) => handleChange(e)}/>

                        <Form.Label>Trailer link</Form.Label>
                        <Form.Control name='trailerLink' placeholder={'Trailer link'} value={game.trailerLink}
                                      onChange={(e) => handleChange(e)}/>

                        <Form.Label>Price</Form.Label>
                        <Form.Control name='price' value={game.price} onChange={(e) => handleChange(e)}/>

                        <Form.Label>Favorites</Form.Label>
                        <Form.Control name='favorites' value={game.favorites} onChange={(e) => handleChange(e)}/>


                        <React.Fragment>
                            <Form.Label>Developer</Form.Label>
                            <Form.Control name='developer' placeholder='Developer' value={game.developer} onChange={(e) => handleChange(e)}/>

                            <Form.Label>Publisher</Form.Label>
                            <Form.Control name='publisher' placeholder='Publisher' value={game.publisher} onChange={(e) => handleChange(e)}/>

                            <Form.Label>Year</Form.Label>
                            <Form.Control name='year' as='select' value={game.year} onChange={(e) => handleChange(e)}>
                                {range(2021, 1990).map(year => <option key={year} value={year}>{year}</option>)}
                            </Form.Control>
                        </React.Fragment>

                        <Row className={'pt-3 pl-3 w-50 justify-content-between'}>
                            <Form.Group>
                                <Form.Label>Dark content</Form.Label>
                                <Form.Check type='checkbox' id='isDark' value={game.isDark} onChange={handleCheckBox}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Featured</Form.Label>
                                <Form.Check type='checkbox' id='isFeatured' value={game.isFeatured} onChange={handleCheckBox}/>
                            </Form.Group>
                        </Row>
                        <br/>
                        <Form.Label><h4>File uploads</h4></Form.Label>
                        <br/>
                        <Form.Label>Game logo</Form.Label>
                        <Form.Control name='gameLogo' placeholder='Game logo' value={game.gameLogo} onChange={(e) => handleChange(e)}/>
                        <Form.Label>Background image</Form.Label>
                        <Form.Control name='backgroundImage' placeholder='Background image'
                                      onChange={(e) => handleChange(e)}/>
                        <Form.Label>Screenshots</Form.Label>
                        <Form.Control name='screenshots' placeholder='Screenshots' value={game.screenshots} onChange={(e) => handleChange(e)}/>
                        <Form.Label>Feature image</Form.Label>
                        <Form.Control name='featureImage' placeholder='Feature image' value={game.featureImage} onChange={(e) => handleChange(e)}/>
                        <Form.Label>Feature video</Form.Label>
                        <Form.Control name='featureVideo' placeholder='Feature video' value={game.featureVideo} onChange={(e) => handleChange(e)}/>
                        <Form.Label>Game box image</Form.Label>
                        <Form.Control name='gameBoxImage' placeholder='Game box image' value={game.gameBoxImage} onChange={(e) => handleChange(e)}/>

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

export default GamesModal;