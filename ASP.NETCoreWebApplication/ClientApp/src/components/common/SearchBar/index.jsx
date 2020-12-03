import React, {useState} from 'react';
import {useHistory} from "react-router";
import Input from "../Input";
import {SearchBarWrapper} from "../SearchBar/style";
import {Button} from "../../base/Button";
import PropTypes from "prop-types"

const SearchBar = ({handleClose}) => {
    const [searchQuery, setQuery] = useState("")
    const history = useHistory()

    const handleRedirect = () => {
        if (searchQuery) {
            history.push(`/search/${searchQuery}`)
            handleClose()
            setQuery("")
        }
    }
    return (
        <SearchBarWrapper>
            <Input transparent type={"text"} label={"Search games"} style={{position: "relative"}} value={searchQuery}
                   onChange={(e) => setQuery(e.target.value)}/>
            <Button isWhite outline marginLeft onClick={handleRedirect}>Search</Button>
        </SearchBarWrapper>
    )
}

SearchBar.propTypes = {
    handleClose: PropTypes.func.isRequired
}

export default SearchBar;
