import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {SearchWrapper} from "./style";
import Input from "../Input";
import {useHistory} from 'react-router';


const Search = (props) => {
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
            <Modal
                show={props.show}
                onHide={props.handleClose}
                style={{position: "absolute", zIndex: "100000"}}
            >
                <SearchWrapper className={"d-flex justify-content-between"}>
                    <Input label={"Search games"} style={{position: "relative"}} value={searchQuery} onChange={(e) => setQuery(e.target.value)}/>
                    <Button onClick={handleRedirect}>Search</Button>
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