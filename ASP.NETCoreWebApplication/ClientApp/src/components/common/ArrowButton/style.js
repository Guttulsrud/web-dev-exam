import styled, {css} from "styled-components"


export const RoundBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: ${props => (props.outline ? "2px solid #0070D1" : "none")};
    background-color: ${props => (props.outline ? "none" : "#0070D1")};
`

export const Rotation = styled.div`
    ${props => props.rotation === 'up' && css `transform:rotate(180deg);`}
    ${props => props.rotation === 'down' && css `transform:rotate(0deg);`}
    ${props => props.rotation === 'left' && css `transform:rotate(90deg);`}
    ${props => props.rotation === 'right' && css `transform:rotate(270deg);`}
`
