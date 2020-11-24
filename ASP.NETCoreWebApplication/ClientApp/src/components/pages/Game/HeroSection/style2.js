import styled from "styled-components"

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

export const Thumbnail = styled.div`
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
export const GameLogo = styled.div`
    background-image: url(${props => props.gameLogo});
    repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 700px;
    height: 300px;
    margin: 0 auto;
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
    &:hover {
     transform: scale(1.03);
     box-shadow: 0 5px 12px 2px rgba(0,0,0,0.54);
     /*    background-image: linear-gradient(to top, #ffffffb9 5%, #ffffff00 95%), url(${props => props.backgroundImage});*/
    }
`

export const TitleText = styled.h1`
    color: #fff;
    font-size: 8rem;
    line-height: 7rem;
    font-weight: bold;
    position: relative;
    z-index: 1000;
    padding-top: 60px;
    text-align: center;
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
    padding-bottom: 30px;
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 300;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 30px;
`

export const TitleCat = styled.h2`
    padding: 10px;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    max-width: 100px;
    border: 2px solid #fff;
    border-radius: 15px;
`

export const Caption = styled.h3`
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: right;
    margin-right: 15px;
`

export const SignLogo = styled.section`
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
