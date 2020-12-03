import styled from "styled-components";
import PropTypes from "prop-types"

export const PsFigures = styled.div`
    background-image: url(${props => (props.black ? "psfiguresb.svg" : "psfigures.svg")});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 128px;
    opacity: 0.2;
    position: relative;
    top: 0;
    left: 0;
    width: 128px;
    height: 64px;
    margin: 0 8px;
`

PsFigures.propTypes = {
    black: PropTypes.bool
}