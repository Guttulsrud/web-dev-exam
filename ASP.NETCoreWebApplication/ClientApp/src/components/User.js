import React from 'react';

const User = ({id, name, image}) => {
    return (
        <article>
            <h3>{name} (id: {id})</h3>
            <img width="100" src={`https://localhost:5001/images/${image}`} alt="User picture"/>
        </article>
    )
}

export default User;