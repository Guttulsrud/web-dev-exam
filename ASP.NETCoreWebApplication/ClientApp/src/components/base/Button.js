import styled from "styled-components"

export const Button = styled.div`
    display: inline;
    padding: ${props => (props.outline ? "10px 40px 10px 40px" : "12px 42px 12px 42px")};
    border-radius: 15px;
    border: ${props => (props.outline ? "2px solid #0070D1" : props.disabled ? "2px solid #C4C4C4" : "none")};
    background-color: ${props => (props.outline ? "none" : props.disabled ? "none" : "#0070D1")};
    color: ${props => (props.outline ? "#0070D1" : props.disabled ? "#c4c4c4" : "#FFFFFF")};
    font-weight: 500;
    font-size: 1rem;
    min-width: 180px;
    text-align: center;
    cursor: ${props => (props.disabled ? "arrow" : "pointer")}
`