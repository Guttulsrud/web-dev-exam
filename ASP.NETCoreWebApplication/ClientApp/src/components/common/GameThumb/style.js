import styled from "styled-components"

export const ThumbButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9900000;
  position: relative;
  text-align: center;
  height: 50px;
  width: 50px;
  border: 2px solid #FFFFFF;
  border-radius: 50%;
  opacity: 0.5;
  transform: translate3d(0,50px,0);
  transition: transform .3s ease;
     &:hover {
     opacity: 1;
     transition: transform 1s ease;
     background: linear-gradient(0deg, rgba(0,112,209,1) 0%, rgba(22,68,150,1) 100%);
     box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
     width: 62px;
     height: 62px;
    }
`
export const Thumb = styled.div`
  background-image: linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0) 100%), url(${props => props.backgroundImage});
  background-color: #0070D1;
  background-size: cover;
  background-position: center;
  transform: scale(1.3);
  width: 100%;
  height: 210px;
  overflow: hidden;
  transition: ease .3s;
  border-radius: 15px;
`

export const Overlay = styled.div`
  position: absolute;
  transition: ease .3s;
  height: 210px;
  width: 100%;
  bottom: 0px;
  opacity: 0;
  border-radius: 15px;
`
export const Hover = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  opacity: 0;
  transition: ease 350ms;
  
   
`


export const ThumbWrapper = styled.div`  
  position: relative;  
  overflow: hidden;
  border-radius: 15px;
  transition: ease .3s;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);

  &:hover {
    transform: scale(1.05);
    transition: ease .3s;
    
  }
  &:hover ${Thumb} {
    transform: scale(1.1);
    transition: ease .3s;
  }
  &:hover ${Overlay} {
    opacity: 1;
    background: rgba(0,0,0,0.30);
    color: #fff;
    transition: ease .3s;
  }
  &:hover ${Hover} {
    opacity: 1;
    transition: ease .3s;
  }
  &:hover ${ThumbButton} {
    visibility: visible;
    transform: translate3d(0,0px,0);
    color: #fff;
    transition: .3s ease;
    transform: scale(1.05);

    border: none;
  }
   
  
`

export const ThumbContainer = styled.div`
  position: absolute;
  bottom: 30px;
  margin-left: 20px;
  margin-right: 20px;   
`

export const OpenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999999990000000000000;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  background-color: rgba(0,0,0,0.8); 
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageContainer = styled.div`
position: relative;
height: 600px;

`