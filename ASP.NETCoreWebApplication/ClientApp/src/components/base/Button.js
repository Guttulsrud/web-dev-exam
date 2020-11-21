import styled from "styled-components"

export const Button = styled.div`
    display: inline;
    padding: ${props => (props.outline ? "10px 40px 10px 40px" : "12px 42px 12px 42px")};
    border-radius: 15px;
    border: ${props => (props.outline ? "2px solid #0070D1" : "none")};
    background-color: ${props => (props.outline ? "none" : "#0070D1")};
    color: ${props => (props.outline ? "#0070D1" : "#FFFFFF")};
    font-weight: 500;
`