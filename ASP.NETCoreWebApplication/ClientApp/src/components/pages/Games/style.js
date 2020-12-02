import styled from "styled-components";

export const DropDownContainer = styled.div`
  z-index: 2000000000000;
  width: 300px;
  margin-top: 30px;
  margin-left: 20px;
  cursor: pointer;
          @media (max-width: 768px) {
            display: block;
            width: 100%;
            margin-right: 30px;
        }
`;

export const DropDownHeader = styled.div`
position: relative;
  padding-left: 15px;
  padding-top: 6px;
  padding-bottom: 8px;
  padding-right: 8px;
  font-size: 1rem;
  color: #0070D1;
  border-radius: 15px;
  border: 2px solid #0070D1;
  &:after {
      position: absolute;
      right: 10px;
      bottom: 3px;
      content: " ";
      width: 32px;
      height: 32px;
      background-image: url(selectarrowdown.svg);
      transition: .2s ease;
      transform: ${({open}) => open ? 'rotate(180deg)' : 'rotate(0)'};
      background-repeat: no-repeat;
      background-position: center;
      background-size: 32px;
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 300px;
  @media (max-width: 768px) {
            display: inline-block       
            width: 100%;
           
        }
  
`;

export const DropDownList = styled.ul`
  cursor: pointer;
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  background: rgb(0,112,209);
  background: linear-gradient(20deg, rgba(0,112,209,1) 0%, rgba(22,68,150,1) 100%);
  box-sizing: border-box;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
  width: 300px;
  &:first-child {
    padding-top: 10px;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  &:hover {
    background-color: rgba(255,255,255,0.4);
    color: #ffffff;
  }
`;
