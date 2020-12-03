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

export const ScreenshotWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
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
    backgroundImage: PropTypes.string
}


