import React, {useContext, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {EntityContext} from '../../../context/EntityContext';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import {handleImageChange, uploadImages} from '../../../helpers/imageUpload';
import PropTypes from 'prop-types';

const GamesModal = ({show, edit, game, id, handleClose, handleChange}) => {
    const {fetchData} = useContext(EntityContext);
    const [isFeatured, setFeatured] = useState(game.isFeatured);
    const [isDark, setDark] = useState(game.isDark);
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

    const handleCheckBox = (e) => {
        e.target.name === 'isDark' ? setDark(!isDark) : setFeatured(!isFeatured);

        handleChange(e);
    };

    const handleForm = (e) => {
        e.preventDefault();
        const addUrl = 'https://localhost:5001/game/create';
        const editUrl = 'https://localhost:5001/game/edit';
        uploadImages(game)
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

                        <Form.Label>Tagline</Form.Label>
                        <Form.Control name='description2' placeholder={'Tagline'} value={game.description2}
                                      onChange={(e) => handleChange(e)}/>

                        <Form.Label>Trailer link</Form.Label>
                        <Form.Control name='trailerLink' placeholder={'Trailer link'} value={game.trailerLink}
                                      onChange={(e) => handleChange(e)}/>

                        <Form.Label>Price</Form.Label>
                        <Form.Control name='price' value={game.price} onChange={(e) => handleChange(e)}/>

                        <Form.Label>Developer</Form.Label>
                        <Form.Control name='developer' placeholder='Developer' value={game.developer}
                                      onChange={(e) => handleChange(e)}/>

                        <Form.Label>Year</Form.Label>
                        <Form.Control name='year' as='select' defaultValue={edit ? game.year : ""} onChange={(e) => handleChange(e)}>
                            <option value="" disabled hidden>Select year</option>
                            {range(2020, 2025).map(year => <option key={year} value={year}>{year}</option>)}
                        </Form.Control>

                        <Row className={'pt-3 pl-3 w-50 justify-content-between'}>
                            <Form.Group>
                                <Form.Label>Dark content</Form.Label>
                                <Form.Check type='checkbox' name='isDark' checked={isDark} value={isDark}
                                            onChange={handleCheckBox}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Featured</Form.Label>
                                <Form.Check type='checkbox' name='isFeatured' checked={isFeatured} value={isFeatured}
                                            onChange={handleCheckBox}/>
                            </Form.Group>
                        </Row>
                        <br/>
                        <div className={"form-input-buttons flex-col"}>
                        <Form.Label><h4>File uploads</h4></Form.Label>
                        <br/>
                        <Form.Label>Game logo</Form.Label>
                        <input onChange={handleImageChange} name='gameLogo' type='file'/>
                        
                        <Form.Label>Screenshots</Form.Label>
                        <input onChange={handleImageChange} name='screenshots' multiple type='file'/>

                        <Form.Label>Feature image</Form.Label>
                        <input onChange={handleImageChange} name='featureImage' type='file'/>

                        <Form.Label>Game box image</Form.Label>
                        <input onChange={handleImageChange} name='gameBoxImage' type='file'/>
                        </div>

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

GamesModal.propTypes = {
    id: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    game: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    edit: PropTypes.bool,
}

export default GamesModal;