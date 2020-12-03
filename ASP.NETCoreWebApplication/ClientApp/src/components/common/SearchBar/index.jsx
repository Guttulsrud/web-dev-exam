import React, {useState} from 'react';
import {useHistory} from "react-router";
import Input from "../Input";
import {SearchBarWrapper} from "../SearchBar/style";
import {Button} from "../../base/Button";

const SearchBar = (props) => {
    const [searchQuery, setQuery] = useState("")
    const history = useHistory()

    const handleRedirect = () => {
        if (searchQuery) {
            history.push(`/search/${searchQuery}`)
            props.handleClose()
            setQuery("")
        }
    }
    return (
        <SearchBarWrapper>
            <Input transparent label={"Search games"} style={{position: "relative"}} value={searchQuery}
                   onChange={(e) => setQuery(e.target.value)}/>
            <Button isWhite outline marginLeft onClick={handleRedirect}>Search</Button>
        </SearchBarWrapper>
    )
}

export default SearchBar;
