import styled from "styled-components"

export const Section = styled.div`
    position: relative;
    min-height: 200px;
    width: 100%;
    height: ${props => props.height}px;
    margin-top: 0px;
    margin-bottom: ${props => (props.noMarginBottom ? "0px" : "30px")};
    margin-top: ${props => props.marginTop}px;
    z-index: 10;
    background: ${props => (props.blue ? "linear-gradient(20deg, rgba(0,112,209,1) 0%, rgba(22,68,150,1) 100%)" : "none")};
`