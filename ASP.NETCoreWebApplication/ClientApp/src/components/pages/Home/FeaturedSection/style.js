import styled from "styled-components"

export const CarouselImage = styled.div`
  position: absolute;
  top: 130px;
  right: 0px;
  height: 450px;
  width: 700px;
  }
`

export const CarouselOverlay = styled.div`
  position: absolute;
  top: 0;
  background-image: linear-gradient(to bottom, #000000b9 5%, #00000000 85%), url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
  border-radius: 15px;
  z-index: 1000;
  }
`

export const CarouselTitle = styled.h1`
    font-size: 8rem;
    line-height: 7rem;
    text-align: left;
    font-weight: bold;
    color: #0070D1;
`

export const CarouselDesc = styled.h2`
    font-family: "SST Light", Arial;
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-align: left;
    color: #000;
    width: 360px;
    margin-top: 20px;
`

export const CardBack = styled.div`
    position: relative;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    background: rgb(0,112,209);
    background: linear-gradient(0deg, rgba(0,112,209,1) 0%, rgba(22,68,150,1) 100%);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
    transform: rotate(-5deg);
    transition: ease .2s; 
    z-index: 900;
`