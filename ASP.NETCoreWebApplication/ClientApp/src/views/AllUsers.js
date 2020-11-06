import React, {useState, useEffect} from 'react';
import User from "../components/User";
import axios from 'axios'

const AllUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const url = 'https://localhost:5001/user'
        axios.get(url).then(res => {
            setUsers(res.data);
        });
    }, [])

    const getUsers = () => {
        return users.map((user, key) => (
            <User key={key} {...user}/>
        ));
    }

    return (
        <section>
            <h3>All Users!</h3>
            {getUsers()}
        </section>
    )
}

export default AllUsers;