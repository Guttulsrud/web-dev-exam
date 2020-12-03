import styled from "styled-components"
import PropTypes from "prop-types"

export const HeaderBody = styled.header`
    padding: 10px 30px ;    
    position: absolute;
    z-index: 10;
    width: 100%;
    background-color: ${props => props.whiteBg ? "#ffffffcc" : "transparent"};
    
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

export const DesktopNav = styled.div`
    @media (max-width: 768px) {
    display: none;
  }
    

`


export const MobileNavWrapper = styled.div`
    display: none;
    @media (max-width: 768px) {
    display: block;
  }

`

export const Hamburger = styled.div`
  position: absolute;
  right: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 12;
  visibility: hidden;
  
    @media (max-width: 768px) {
    visibility: visible;
  }
    
  &:focus {
    outline: none;
  }

  div {
    width: 30px;
    height: 4px;
    background:  ${({open}) => open ? '#FFF' : '#0070D1'};
    border-radius: 10px;
    transition: all .2s linear;
    position: relative;
    transform-origin: 1px;
    
    :first-child {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({open}) => open ? '0' : '1'};
      transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: rgb(0,112,209);
  background: linear-gradient(30deg, rgba(0,112,209,1) 0%, rgba(22,68,150,1) 100%);
  height: 100vh;
  width: 100vw;
  text-align: left;
  padding-top: 100px;
  padding-left: 30px;
  padding-right: 30px;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 11;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  @media (max-width: 576px) {
    width: 100%;
  }
    `

HeaderBody.propTypes = {
    whiteBg: PropTypes.bool
}