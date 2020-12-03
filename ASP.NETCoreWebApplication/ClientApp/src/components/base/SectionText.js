import styled from "styled-components";
import PropTypes from "prop-types"

export const SectionText = styled.h1`
    position: relative;
    display: flex;
    justify-content: ${props => (props.right ? "flex-end" : props.center ? "center" : "flex-start")};
    text-align: ${props => (props.center ? "center" : "left")};
    width: 100%;
    color: ${props => (props.white ? "#FFFFFF" : " #0070D1")};
    font-size: 1.8rem;
    font-family: "SST Light", Arial;
    z-index: 1000;
    padding-top: 50px;
    padding-bottom: 30px;
       @media (max-width: 576px) {
            font-size: 1.4rem;
        }
`

SectionText.propTypes = {
    right: PropTypes.bool,
    center: PropTypes.bool,
    white: PropTypes.bool
}