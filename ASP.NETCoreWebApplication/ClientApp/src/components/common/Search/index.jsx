import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {SearchInput, SearchWrapper, SearchButton} from "./style";
import Input from "../Input";


const Search = (props) => {

    return (
        <>

            <Modal
                show={props.show}
                onHide={props.handleClose}
                style={{position: "absolute", zIndex: "100000"}}

            >
                <SearchWrapper className={"d-flex justify-content-between"}>

                    <Input label={"Search games"} style={{position: "relative"}}></Input>
                    <Button>Search</Button>

                </SearchWrapper>


               {/* <SearchWrapper style={{position: "absolute", marginTop: "100px"}}>
                    <SearchInput placeholder="Search games" type="text"></SearchInput>
                    <SearchButton placeholder={"Search"}></SearchButton>
                </SearchWrapper>*/}

                {/*
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search games"
                            aria-label="Search games"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Button</Button>
                        </InputGroup.Append>
                    </InputGroup>

                    */}



            </Modal>
            </>
    )
}

export default Search;