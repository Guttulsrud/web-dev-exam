import styled from "styled-components";

export const SectionTitle = styled.h1`
    position: relative;
    display: flex;
    justify-content: ${props => (props.right ? "flex-end" : props.center ? "center" : "flex-start")};
    width: 100%;
    ${props => (
    props.white ? "color: #FFFFFF;" :
        "background: -webkit-linear-gradient(0deg, #164496, #0070D1);" +
        "-webkit-background-clip: text;" +
        "-webkit-text-fill-color: transparent;")};
 
    font-size: 6rem;
    font-weight: bold;
    z-index: 1000;
    padding-top: 50px;
    padding-bottom: 30px;
        @media (max-width: 576px) {
            font-size: 2rem;
        }
        @media (max-width: 768px) {
            font-size: 3rem;
        }
        @media (max-width: 992px) {
            font-size: 3rem;
        }

  
`