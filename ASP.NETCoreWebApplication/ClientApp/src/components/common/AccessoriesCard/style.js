import styled from "styled-components"
import PropTypes from "prop-types"

export const Card = styled.div`
    position: relative;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.20);
    border-radius: 15px;
    min-height: 400px;
    margin-bottom: 30px;
    overflow: hidden;
    z-index: 1000000000000000000;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const CardBack = styled.div`
    position: absolute;
    height: 400px;
    width: 100%;
    border-radius: 15px;
    background: rgb(0,112,209);
    background: linear-gradient(5deg, rgba(0,112,209,1) 0%, rgba(22,68,150,1) 100%);
    top: 0;
    left: 0px;
    transform: rotate(-5deg);
    transition: ease .2s;
    overflow: hidden;    
`

export const Wave = styled.div`
   position: absolute;
   bottom: -100px;
   background-image: url(wave1.svg);
   background-repeat: no-repeat;
   background-position: bottom;
   height: 400px;
   width: 100%;
`

export const CardTitle = styled.h1`
   font-size: 3rem;
   font-weight: bold;
   color: #0070D1;
   @media (max-width: 768px) {
            font-size: 2rem;
        }
`

export const CardDesc = styled.h2`
   font-size: 1.2rem;
   color: #000;
   font-family: "SST Light", Arial;
   
`

export const CardImage = styled.div`
   position: relative;
   z-index: 1000009999999;
   width: 300px;
   height: 300px;
   background-image: url(${props => props.backgroundImage});
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat; 
`

export const CardBody = styled.div`
    padding-left: 20px;
    position: relative;
    z-index: 1000009999999;
    width: 600px; 
`

export const CardWrapper = styled.div`
    position: relative;
    padding-bottom: 40px;
`
export const SignLogo = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-image: url("signlogo.png");
    background-size: cover;
    background-position: center;
    width: 18px;
    height: 18px;    
`

export const LogoWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
    transform: rotate(0deg);    
`

CardImage.propTypes = {
    backgroundImage: PropTypes.string
}