import styled from "styled-components"
import PropTypes from "prop-types"

export const CarouselImage = styled.div`
  position: absolute;
  background-color: #0070D1;
  background-image: linear-gradient(to bottom, #000000b9 5%, #00000000 85%), url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
  border-radius: 15px;
  height: 600px;
  z-index: 10;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;

`

export const CarouselTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  line-height: 3rem;
  color: #FFFFFF;
  text-align: left;
  margin-bottom: 30px;
  @media (min-width: 576px) {
            font-size: 3rem;
            line-height: 3rem;
            width: 300px;
        }
    @media (min-width: 768px) {
            font-size: 4rem;
            line-height: 4rem;
            width: 500px;
        }
        
        @media (min-width: 992px) {
            font-size: 7rem;
            line-height: 7rem;
            width: 900px;
        }
`

export const CarouselDescription = styled.div`
  font-family: "SST Light", Arial;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #FFFFFF;
  text-align: left;
  width: 400px;
  margin-bottom: 30px;
  @media (min-width: 576px) {
            width: 400px;
            font-size: 1.2rem;
            line-height: 1.6rem;
        }
        @media (min-width: 992px) {
            font-size: 1.4rem;
            line-height: 1.8rem;
            width: 600px;
        }
`

export const CarouselCaption = styled.div`
  padding: 30px;
`

export const CardBack = styled.div`
    position: absolute;
    top: 0;
    height: 600px;
    width: 100%;
    border-radius: 15px;
    background: rgb(0,112,209);
    background: linear-gradient(0deg, rgba(0,112,209,1) 0%, rgba(22,68,150,1) 100%);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
    transform: rotate(-5deg);
    transition: ease .2s; 
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
    top: 15px;
    right: 20px;
    transform: rotate(0deg);
`

CarouselImage.propTypes = {
    backgroundImage: PropTypes.string.isRequired
}