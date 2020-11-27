import React from 'react';
import Row from 'react-bootstrap/Row';
import AccessoriesCard from "../AccessoriesCard";

const AccessoriesList = (props) => {

    const getData = () => {
        return props.data.map((item, i) => {
            return <AccessoriesCard key={i} {...item}/>
        });
    }

    return (
        <Row>
            {getData()}
        </Row>
    )
}

export default AccessoriesList;