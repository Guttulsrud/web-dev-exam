import styled from "styled-components";

export const SectionTitle = styled.h1`
    position: relative;
    display: flex;
    justify-content: ${props => (props.right ? "flex-end" : props.center ? "center" : "flex-start")};
    width: 100%;
    color: ${props => (props.white ? "#FFFFFF" : " #0070D1")};
    text-align: center;
    font-size: 6rem;
    font-weight: bold;
    z-index: 1000;
    padding-top: 50px;
    padding-bottom: 30px;
`