import styled from "styled-components"

export const Card = styled.div`
  position: relative;  
  background-image: linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0) 100%), url(${props => props.backgroundImage});
  background-color: #0070D1;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
  border-radius: 15px;
  transition: .2s linear;
   &:hover {
     transform: scale(1.05);
     box-shadow: 0 5px 12px 2px rgba(0,0,0,0.30);
    
`

export const CardContainer = styled.div`
  position: absolute;
  bottom: 30px;
  margin-left: 20px;
  margin-right: 20px;   
`

export const CardTitle = styled.h2`
  color: #fff;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 600;
  margin-bottom: 20px;
`

export const CardCategory = styled.h3`
  display: inline;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 8px;
`