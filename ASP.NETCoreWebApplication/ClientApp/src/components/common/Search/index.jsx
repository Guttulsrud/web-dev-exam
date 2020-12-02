import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {SearchWrapper} from "./style";
import SearchBar from "../SearchBar";


const Search = (props) => {
    return (

        <Modal
            show={props.show}
            onHide={props.handleClose}
            style={{position: "absolute", zIndex: "100000"}}
        >
            <SearchWrapper>
                <SearchBar handleClose={props.handleClose}></SearchBar>
            </SearchWrapper>
        </Modal>
    )
}

export default Search;