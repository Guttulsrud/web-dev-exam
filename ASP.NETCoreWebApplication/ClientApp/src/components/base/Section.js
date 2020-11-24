import styled from "styled-components"

export const Section = styled.div`
    position: relative;
    width: 100%;
    height: ${props => props.height}px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: ${props => props.marginTop}px;
    z-index: 10;
    background: ${props => (props.blue ? "linear-gradient(20deg, rgba(0,112,209,1) 0%, rgba(22,68,150,1) 100%)" : "none")};
`