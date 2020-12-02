import React, {useState} from 'react';
import {useHistory} from "react-router";
import Input from "../Input";
import Button from "react-bootstrap/Button";
import {SearchWrapper} from "../Search/style";

const SearchBar = () => {
    const [searchQuery, setQuery] = useState("")
    const history = useHistory()

    const handleRedirect = () =>  {
        if(searchQuery) {
            history.push(`/search/${searchQuery}`)
            props.handleClose()
            setQuery("")
        }
    }
    return (
        <>
            <Input label={"Search games"} style={{position: "relative"}} value={searchQuery} onChange={(e) => setQuery(e.target.value)}/>
            <Button onClick={handleRedirect}>Search</Button>
            </>
    )
}

export default SearchBar;
