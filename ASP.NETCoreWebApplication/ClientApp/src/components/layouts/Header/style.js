import styled from "styled-components"

export const HeaderBody = styled.header`
    padding: 10px 30px ;    
    position: absolute;
    z-index: 10;
    width: 100%;
    
`
export const HeaderTop = styled.header`
    display: flex;
    justify-content: flex-end;
    height: 36px;
    width: 100%;
    background-color: #000;
`

export const Logo = styled.div`
    background-image: url(sony_logo.svg);
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    top: 0;
    left: 0;
    height: 36px;
    width: 75px;
    margin: 0 8px;
`
export const CogIcon = styled.div`
    background-image: url(cog_icon.svg);
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    top: 0;
    left: 0;
    height: 36px;
    width: 36px;
    cursor: pointer;
    transition: .2s ease;
    &:hover {
        transform: rotate(40deg) scale(1.5);
    }
`

