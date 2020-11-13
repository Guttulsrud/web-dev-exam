import styled from "styled-components"
import {Col} from 'react-bootstrap';

export const HeaderWrapper = styled.section`
  background-image:  /*linear-gradient( #0072ceb9, #0072ce33),*/ url(${props => props.backgroundImage});
  background-size: cover;
  min-height: 100vh;
  transition: background-image .5s linear;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`

export const CardWrapper = styled.div`
    background-image: linear-gradient(to top, #000000b9 5%, #00000000 95%), url(${props => props.backgroundImage});
    background-size: 100% 100%;
    padding: 0;
    transition: .2s linear;
    width: 20%;
    position: relative;
    height: 400px;
    border-radius: 15px;
    
    &:hover {
     transform: scale(1.5);
     box-shadow: 0 5px 12px 2px rgba(0,0,0,0.54);
      
  /*    background-image: linear-gradient(to top, #ffffffb9 5%, #ffffff00 95%), url(${props => props.backgroundImage});*/
    }
`

export const TitleText = styled.h1`
    color: #fff;
    bottom: 20px;
    left: 10px;
    position: absolute;
`
