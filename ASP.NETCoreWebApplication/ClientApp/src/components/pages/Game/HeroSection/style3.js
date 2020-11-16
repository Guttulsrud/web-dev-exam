import styled from "styled-components"
import {Col} from 'react-bootstrap';

export const HeroWrapper = styled.section`
  background-color: #fff;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  height: 100%;
  transition: background-image .5s linear;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
`

export const ParallaxImage = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 900px;
  width: 1300px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  
  bottom: -100px;
  position: absolute;
  z-index: 10;


`


export const ThumbWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: 1000;
    
`

export const SectionWrapper = styled.div`
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
`

export const Thumb = styled.div`
    background-image: linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0) 100%), url(screenshots/${props => props.backgroundImage});
    border-radius: 15px;
    height: 200px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
    background-color: #ff00cc;
    background-size: cover;
    background-position: center;
    transition: .2s linear;
        &:hover {
     transform: scale(1.03);
     box-shadow: 0 5px 12px 2px rgba(0,0,0,0.54);
     }
`

export const TitleText = styled.h1`
    color: ${props => props.color};
    font-size: ${props => props.fontSize}rem;
    line-height:  ${props => props.lineHeight}rem;
    font-weight: bold;
    position: relative;
    z-index: ${props => props.zIndex};
    padding-top: 60px;
    margin: 0 auto;
    width: 100%;
`

export const TitleSection = styled.h1`
    color: #0070D1;
    font-size: 6rem;
    font-weight: bold;
    position: relative;
    z-index: 1000;
    padding-top: 30px;
    padding-bottom: 30px;
`

export const TitleDesc = styled.h2`
    padding-top: 30px;
    color: #000;
    padding-bottom: 30px;
    font-size: 1.2rem;
    font-weight: 300;
    max-width: 600px;
    position: relative;
    top: 50px;
    z-index: 1000;
`

export const TitleCat = styled.h2`
    padding: 10px;
    color: #0070D1;
    font-size: 1rem;
    font-weight: 500;
    max-width: 153px;
    border: 2px solid #0070D1;
    border-radius: 15px;
    position: relative;
    top: 80px;
    z-index: 1000;
`

export const Caption = styled.h3`
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: right;
    margin-right: 15px;
    opacity: 0.4;
`

export const ThumbCaption = styled.h4`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 300;
    position: absolute;
    bottom: 20px;
    left: 20px;
`

export const SignLogo = styled.section`
  background-image: url(${props => props.backgroundImage});
  transform: rotate(20deg);
  opacity: 0.2;
  background-size: cover;
  background-position: center;
  height: 600px;
  width: 600px;
  transition: background-image .5s linear;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: absolute;
  left: -200px;
  z-index: 1;
`

export const SignLogoSmall = styled.section`
  background-image: url(signlogo.png);
  background-size: cover;
  background-position: center;
  height: 40px;
  width: 40px;
  margin: 0 auto;
  margin-top: 50px;
  opacity: 0.5;

`


export const Card = styled.div`
  background-image: linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0) 100%), url(${props => props.backgroundImage});
  background-color: #ff00cc;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
  border-radius: 15px;
  transition: .2s linear;
  position: relative;
  z-index: 10000;
   &:hover {
     transform: scale(1.05);
     box-shadow: 0 5px 12px 2px rgba(0,0,0,0.60);
    
    `
export const CardTitle = styled.h3`
    color: #fff;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 600;
    position: absolute;
    z-index: 1000;
    bottom: 50px;
    width: 210px;
    margin-left: 20px;
`



export const RadialGradient = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, rgba(196, 196, 196, 1) 0%, rgba(196, 196, 196, 0) 100%);

    width: 1500px;
    height: 1500px;
    position: absolute;
    left: -500px;
    top: -600px;
`

