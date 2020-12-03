import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {SearchWrapper} from "./style";
import SearchBar from "../SearchBar";
import PropTypes from "prop-types"


const Search = (props) => {
    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            style={{position: "absolute", zIndex: "100000"}}
        >
            <SearchWrapper>
                <SearchBar handleClose={props.handleClose}/>
            </SearchWrapper>
        </Modal>
    )
}

Search.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
}


export default Search;