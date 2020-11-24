import styled from "styled-components";

export const SectionTitle = styled.h1`
    position: relative;
    display: flex;
    justify-content: ${props => (props.right ? "flex-end" : "flex-start")};
    width: 100%;
    color: ${props => (props.white ? "#FFFFFF" : " #0070D1")};
    font-size: 6rem;
    font-weight: bold;
    z-index: 1000;
    padding-top: 30px;
    padding-bottom: 30px;
`