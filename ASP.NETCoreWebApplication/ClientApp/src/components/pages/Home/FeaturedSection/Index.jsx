import React from 'react';

import {Section} from '../../../base/Section';
import Container from "react-bootstrap/Container";
import GameList from "../../../common/GameList/GameList";
import FeaturedCarousel from "./FeaturedCarousel";

const HeaderSection = (props) => {

    return (
            <Section>

                    <FeaturedCarousel data={props.data}/>

            </Section>
    )
}

export default HeaderSection;