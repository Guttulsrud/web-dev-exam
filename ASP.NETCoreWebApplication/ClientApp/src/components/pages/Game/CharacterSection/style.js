import styled from "styled-components"
import PropTypes from "prop-types"

export const CharacterTile = styled.div`
    height: 100px;
    width: 100%;
    background-image: linear-gradient(to right, #000000b9 5%, #00000000 95%), url(${props => props.image});
    border-radius: 5px;
    color: #FFF;
    font-size: 32px;
    margin-bottom: 10px;
`

CharacterTile.PropTypes = {
    image: PropTypes.string.isRequired
}
