import styled from "styled-components"
import PropTypes from "prop-types"

export const HeroWrapper = styled.section`
    background-image: linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0) 100%), url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    transition: background-image .5s linear;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
`

export const ThumbWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const ScreenshotWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`



export const SectionWrapper = styled.div`
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
`

export const Thumb = styled.div`
    background-image: linear-gradient(to top, #000000b9 5%, #00000000 95%), url(${props => props.backgroundImage});
    background-size: 100% 100%;
    padding: 0;
    margin: 15px;
    transition: .2s linear;
    width: 240px;
    position: relative;
    height: 135px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.30);
        &:hover {
         transform: scale(1.03);
         box-shadow: 0 5px 12px 2px rgba(0,0,0,0.54);
        }
`

export const TitleText = styled.h1`
    color: #fff;
    font-size: 8rem;
    line-height: 7rem;
    font-weight: bold;
    position: relative;
    z-index: 10;
    padding-top: 60px;
            @media (max-width: 576px) {
            font-size: 3rem;
            line-height: 2.8rem;
        }
        @media (max-width: 768px) {
            font-size: 5rem;
            line-height: 4.8rem;
        }
        @media (max-width: 992px) {
            font-size: 5rem;
            line-height: 4.8rem;
        }
`

export const TitleSection = styled.h1`
    color: #0070D1;
    font-size: 6rem;
    font-weight: bold;
    position: relative;
    z-index: 10;
    padding-top: 30px;
    padding-bottom: 30px;
`

export const TitleDesc = styled.h2`
    padding-top: 30px;
    padding-bottom: 30px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 300;
    max-width: 600px;
    font-family: "SST Light", Arial;
`

export const TitleCat = styled.div`
    position: relative;
    display: inline-block;
    padding-left: 20px;
    padding-top: 8px;
    padding-right: 20px;
    padding-bottom: 8px;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    border: 2px solid #fff;
    border-radius: 15px;
    margin-right: 20px;
    
`

export const Caption = styled.h3`
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: right;
    margin-right: 15px;
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
    z-index: 10;
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
    bottom: -250px;
`

export const ScreenshotsArea = styled.div`
       @media (max-width: 576px) {
            display: none
        }
        @media (max-width: 768px) {
            display: none;
        }
        @media (max-width: 992px) {
            display: none;
        }
`

HeroWrapper.propTypes = {
    backgroundImage: PropTypes.string.isRequired
}
Thumb.propTypes = {
    backgroundImage: PropTypes.string.isRequired
}
SignLogo.propTypes = {
    backgroundImage: PropTypes.string.isRequired
}
Card.propTypes = {
    backgroundImage: PropTypes.string.isRequired
}

