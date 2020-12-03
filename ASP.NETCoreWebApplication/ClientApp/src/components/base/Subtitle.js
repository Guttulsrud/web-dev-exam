import styled from "styled-components"
import PropTypes from "prop-types"

export const Subtitle = styled.h2`
    font-size: 2rem;
    font-family: "SST Light", Arial;
    color: ${props => (props.white ? "#FFFFFF" : "#0070D1")};
    display: flex;
    justify-content: ${props => (props.right ? "flex-end" : props.center ? "center" : "flex-start")};
    width: 100%;
    padding-top: 50px;
    padding-bottom: 20px;
`
Subtitle.propTypes = {
    white: PropTypes.bool,
    right: PropTypes.bool,
    center: PropTypes.bool
}