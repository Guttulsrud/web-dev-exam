import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {SearchWrapper} from "./style";
import Input from "../Input";
import {useHistory} from 'react-router';
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