import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'

export const AdminGames = (props) => {

    const categories = [
        'Action RPG',
        'Racing',
        '3D Platformer',
        'Adventure'
    ]

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
        'year': 0,
        'screenshots': ["ke"],
        'isDark': false,
        'isFeatured': false,
    });

    const handleChange = (e) => {
        game[e.target.id] = e.target.value
        console.log(game[e.target.id])
    }

    const axios = require('axios')
    const handleForm = (e) => {
        console.log(game.isDark)
        e.preventDefault()
        const url = "https://localhost:5001/game/create"
        axios.post(url, game).then(r => console.log(r))
    }

    const range = (start, end) => {
        const next = start < end ? 1 : -1
        if(start === end)
            return [start];
        return [start, ...range(start + next, end)];
    }
    return (
        <React.Fragment>
            <Form style={{margin: '200px'}} onSubmit={e => handleForm(e)}>
                <Form.Group controlId="formBasicEmail">

                    <Button variant="primary" type="submit">Submit</Button><br/>

                    <Form.Label>title</Form.Label>
                    <Form.Control id="title" placeholder="title" onChange={handleChange}/>

                    <Form.Label>category</Form.Label>
                    <Form.Control id="category" placeholder="category" as='select' onChange={handleChange}>
                        {categories.map(c => <option>{c}</option>)}
                    </Form.Control>

                    <Form.Label>subtitle</Form.Label>
                    <Form.Control id="subtitle" placeholder="subtitle" onChange={handleChange}/>

                    <Form.Label>description</Form.Label>
                    <Form.Control id="description" placeholder="description" onChange={handleChange}/>

                    <Form.Label>description2</Form.Label>
                    <Form.Control id="description2" placeholder="description2" onChange={handleChange}/>

                    <Form.Label>trailerLink</Form.Label>
                    <Form.Control id="trailerLink" placeholder="trailerLink" onChange={handleChange}/>

                    <Form.Label>price</Form.Label>
                    <Form.Control id="price" placeholder="price"  onChange={handleChange}/>

                    <Form.Label>favorites</Form.Label>
                    <Form.Control id="favorites" placeholder="favorites" onChange={handleChange}/>

                    <Form.Label>developer</Form.Label>
                    <Form.Control id="developer" placeholder="developer" onChange={handleChange}/>

                    <Form.Label>publisher</Form.Label>
                    <Form.Control id="publisher" placeholder="publisher" onChange={handleChange}/>

                    <Form.Label>year</Form.Label>
                    <Form.Control id="year" placeholder="year" as="select" onChange={handleChange}>
                        {range(2021, 1990).map(year => <option>{year}</option>)}
                    </Form.Control>

                    <Form.Label>isDark</Form.Label>
                    <Form.Check type="checkbox" id="isDark" onChange={handleChange}/>
                    <Form.Label>isFeatured</Form.Label>
                    <Form.Check type="checkbox" id="isFeatured" onChange={handleChange}/>


                    <br/>
                    <Form.Label><h4>File uploads</h4></Form.Label>
                    <br/>
                    <Form.Label>gameLogo</Form.Label>
                    <Form.Control id="gameLogo" placeholder="gameLogo" onChange={handleChange}/>
                    <Form.Label>backgroundImage</Form.Label>
                    <Form.Control id="backgroundImage" placeholder="backgroundImage" onChange={handleChange}/>
                    <Form.Label>screenshots</Form.Label>
                    <Form.Control id="screenshots" placeholder="screenshots" onChange={handleChange}/>
                    <Form.Label>featureImage</Form.Label>
                    <Form.Control id="featureImage" placeholder="featureImage" onChange={handleChange}/>
                    <Form.Label>featureVideo</Form.Label>
                    <Form.Control id="featureVideo" placeholder="featureVideo" onChange={handleChange}/>
                    <Form.Label>gameBoxImage</Form.Label>
                    <Form.Control id="gameBoxImage" placeholder="gameBoxImage" onChange={handleChange}/>

                </Form.Group>
            </Form>
        </React.Fragment>
    );
};
