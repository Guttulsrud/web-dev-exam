import React, {useEffect, useState} from 'react';
import {HeaderWrapper} from './style';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import GameCard from './GameCard';

const HeaderSection = () => {
  /*  const [imageIndex, setIndex] = useState(0)
    const imageArray = ["miles-morales.jpg", "forbidden-west.jpg"]*/

/*    useEffect(() => {
        const interval = setInterval(() => {
            if(imageIndex < imageArray.length - 1) {
                setIndex(imageIndex +1)
            } else {
                setIndex(0)
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [imageIndex]);*/

    return (
        <HeaderWrapper backgroundImage={""}>
            <Row className={"w-100 justify-content-around"}>
                <GameCard image={"miles-morales.jpg"} title={"Spider-man"}/>
                <GameCard image={"forbidden-west.jpg"} title={"Forbidden West"}/>
                <GameCard image={"miles-morales.jpg"} title={"Spider-man"}/>
            </Row>
        </HeaderWrapper>
    );
};

export default HeaderSection;