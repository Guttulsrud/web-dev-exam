import styled from "styled-components"

export const Thumb = styled.div`
  position: relative;  
  background-image: linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0) 100%), url(${props => props.backgroundImage});
  background-color: #0070D1;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 210px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
  border-radius: 15px;
  transition: .2s linear;
   &:hover {
     background-image: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%), url(${props => props.backgroundImage});
     transform: scale(1.05);
     box-shadow: 0 5px 12px 2px rgba(0,0,0,0.30);
`

export const ThumbContainer = styled.div`
  position: absolute;
  bottom: 30px;
  margin-left: 20px;
  margin-right: 20px;   
`