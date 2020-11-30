import styled from "styled-components";

export const DropDownContainer = styled.div`
  z-index: 2000000000000;
  width: 10.5em;
  margin-left: 20px;
`;

export const DropDownHeader = styled.div`
  padding-left: 15px;
  padding-top: 8px;
  padding-bottom: 10px;
  padding-right: 8px;
  font-size: 1.2rem;
  color: #0070D1;
  border-radius: 15px;
  border: 2px solid #0070D1;
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: rgb(0,112,209);
  background: linear-gradient(0deg, rgba(0,112,209,1) 0%, rgba(22,68,150,1) 100%);
  box-sizing: border-box;
  color: #FFFFFF;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 15px;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;
