import React, {useState} from 'react';
import axios from 'axios'


const CreateUser = () => {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')

    
    const handleSubmit = () => {
        axios.post('https://localhost:5001/user', {name, image
        }).then(r => console.log(r))
    }
    
    return (
        <section>
            <h3>Create user!</h3>
            <label>Name</label>
            <input id="name" onChange={(e) => setName(e.target.value)} type="text" value={name}/>
            <label>Image</label>
            <input id="image" onChange={(e) => setImage(e.target.value)} type="text" value={image}/>
            <input type="button" onClick={handleSubmit} value="Save new user"/>
        </section>
    )
}

export default CreateUser;