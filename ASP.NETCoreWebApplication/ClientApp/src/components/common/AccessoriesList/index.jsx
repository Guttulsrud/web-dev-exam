import React from 'react';
import Row from 'react-bootstrap/Row';
import AccessoriesCard from "../AccessoriesCard";

const AccessoriesList = (props) => {

    const getData = () => {
        return props.data.map((item, i) => (
            <AccessoriesCard key={i} col={i === 0 ? "12" : "6"} {...item}/>
        ));
    }



    return (
        <Row>
            {getData()}
        </Row>
    )
}

export default AccessoriesList;