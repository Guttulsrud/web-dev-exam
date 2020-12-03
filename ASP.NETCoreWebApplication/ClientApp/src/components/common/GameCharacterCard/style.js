import styled from "styled-components"

export const CharacterCard = styled.div`
    overflow: hidden;
 
`
export const CharacterImage = styled.div`
    position: relative;
    background: rgb(0,112,209);
    background-image: url(${props => props.backgroundImage});
    background-position: center;
    background-size: cover;
    height: 400px;
    overflow: hidden;
`

export const Overlay = styled.div`
   position: absolute;
   transition: ease .2s;
   background-color: rgba(0,0,0,0.4);
   height: 100%;
   width: 100%;
   bottom: 0px;
   border-radius: 15px;
`

export const CharacterCardWrapper = styled.div`
    position: relative;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.20);
    height: 100%;
    background-color: #ffffff;
    overflow: hidden;
       &:hover ${Overlay} {
       background-color: rgba(0,0,0,0.0);
       transition: ease .2s;
    }
`

export const CharacterWave = styled.div`
   position: absolute;
   bottom: -80px;
   background-image: url(wave-white.svg);
   background-repeat: no-repeat;
   background-position: top;
   background-size: cover;
   height: 250px;
   width: 100%;
`

export const CharacterCaption = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    padding-top: 10px;
    height: 100%;
    
`

export const CharacterName = styled.h1`
    color: #007aff;
    font-size: 2rem;
    margin-bottom: 20px;
    
`

export const CharacterDesc = styled.p`
    font-family: "SST Light", Arial;
    font-size: 1.2rem;
    
`

export const WaveWrapper = styled.div`
    position: relative;
    bottom: 0;
    height: 60px;
    
`



