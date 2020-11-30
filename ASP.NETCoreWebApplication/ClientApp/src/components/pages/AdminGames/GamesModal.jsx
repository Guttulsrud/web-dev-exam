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
        const url = 'https://localhost:5001/game/create';
        axios.post(url, game).then(fetchData).then(() => handleClose());
    };

    const handleDelete = async () => axios.delete(`https://localhost:5001/game/delete/${id}`).then(fetchData).then(() => handleClose());

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{edit ? `Edit ${game.title}` : 'Add new game'}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleForm}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>title</Form.Label>
                        <Form.Control id='title' placeholder={edit ? game.title : 'Title'} value={game.title}
                                      onChange={(e) => handleChange(e.target.value)}/>

                        <Form.Label>category</Form.Label>
                        <Form.Control id='category' placeholder={edit ? game.category : 'Category'} as='select'
                                      onChange={handleChange}>
                            {categories.map((c, index) => <option key={`option${index}`}>{c}</option>)}
                        </Form.Control>

                        <Form.Label>subtitle</Form.Label>
                        <Form.Control id='subtitle' placeholder={edit ? game.subtitle : 'Subtitle'}
                                      onChange={handleChange}/>

                        <Form.Label>description</Form.Label>
                        <Form.Control id='description' placeholder={edit ? game.description : 'Description'}
                                      onChange={handleChange}/>

                        <Form.Label>description2</Form.Label>
                        <Form.Control id='description2' placeholder={edit ? game.description : 'Description 2'}
                                      onChange={handleChange}/>

                        <Form.Label>trailerLink</Form.Label>
                        <Form.Control id='trailerLink' placeholder={edit ? game.trailerLink : 'Trailer link'}
                                      onChange={handleChange}/>

                        <Form.Label>price</Form.Label>
                        <Form.Control id='price' placeholder='price' onChange={handleChange}/>

                        <Form.Label>favorites</Form.Label>
                        <Form.Control id='favorites' placeholder='favorites' onChange={handleChange}/>

                        <Form.Label>developer</Form.Label>
                        <Form.Control id='developer' placeholder='developer' onChange={handleChange}/>

                        <Form.Label>publisher</Form.Label>
                        <Form.Control id='publisher' placeholder='publisher' onChange={handleChange}/>

                        <Form.Label>year</Form.Label>
                        <Form.Control id='year' placeholder='year' as='select' onChange={handleChange}>
                            {range(2021, 1990).map(year => <option>{year}</option>)}
                        </Form.Control>
                        <Row className={'pt-3 pl-3 w-50 justify-content-between'}>
                            <Form.Group>
                                <Form.Label>Dark header</Form.Label>
                                <Form.Check type='checkbox' id='isDark' onChange={handleCheckBox}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Featured</Form.Label>
                                <Form.Check type='checkbox' id='isFeatured' onChange={handleCheckBox}/>
                            </Form.Group>
                        </Row>
                        <br/>
                        <Form.Label><h4>File uploads</h4></Form.Label>
                        <br/>
                        <Form.Label>gameLogo</Form.Label>
                        <Form.Control id='gameLogo' placeholder='gameLogo' onChange={handleChange}/>
                        <Form.Label>backgroundImage</Form.Label>
                        <Form.Control id='backgroundImage' placeholder='backgroundImage' onChange={handleChange}/>
                        <Form.Label>screenshots</Form.Label>
                        <Form.Control id='screenshots' placeholder='screenshots' onChange={handleChange}/>
                        <Form.Label>featureImage</Form.Label>
                        <Form.Control id='featureImage' placeholder='featureImage' onChange={handleChange}/>
                        <Form.Label>featureVideo</Form.Label>
                        <Form.Control id='featureVideo' placeholder='featureVideo' onChange={handleChange}/>
                        <Form.Label>gameBoxImage</Form.Label>
                        <Form.Control id='gameBoxImage' placeholder='gameBoxImage' onChange={handleChange}/>

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