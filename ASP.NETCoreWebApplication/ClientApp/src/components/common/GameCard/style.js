import styled from "styled-components";

export const CardCategory = styled.h3`
  position: relative;
  display: inline;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 8px;
  transition: .2s ease;
`

export const CardContainer = styled.div`
  position: absolute;
  bottom: 30px;
  margin-left: 20px;
  margin-right: 20px; 
  transform: translate3d(0,50px,0);
  transition: .2s ease;

`

export const Hover = styled.div`
  opacity: 0;
  transition: .2s ease;

`

export const CardImage = styled.div`
  position: relative;  
  background-image: linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0) 100%), url(${props => props.backgroundImage});
  background-color: #0070D1;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  border-radius: 15px;
  transform: scale(1.3);
  transition: .2s ease;
`

export const Card = styled.div`

 position: relative;
   width: 100%;
  height: 400px;
 transition: .2s ease;
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
   &:hover {
     transform: scale(1.05);
     box-shadow: 0 5px 12px 2px rgba(0,0,0,0.30);
     }
   &:hover ${CardImage} {
   transform: scale(1.1);
    transition: ease .3s;
  }
   &:hover ${CardContainer} {
   opacity: 1;
   transition: .2s ease;
   transform: translate3d(0,0px,0);
   transform: scale(1.05);
   
   }
    &:hover ${Hover} {
   opacity: 1;
   transition: .2s ease;

   
   }
   
`



export const CardTitle = styled.h2`
  color: #fff;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 600;
  margin-bottom: 20px;
`

