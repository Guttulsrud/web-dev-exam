import React, {useContext} from 'react';
import Row from 'react-bootstrap/Row';
import AccessoriesCard from "../AccessoriesCard";
import {EntityContext} from "../../../context/EntityContext";

const AccessoriesList = (props) => {
    const {entities} = useContext(EntityContext);
    const [accessories] = entities;



    const getData = () => {
        return accessories.map((item, i) => (
            <AccessoriesCard key={i} col={i === 0 ? "12" : "12"} {...item}/>
        ));
    }



    return (
        <Row>
            {getData()}
        </Row>
    )
}

export default AccessoriesList;