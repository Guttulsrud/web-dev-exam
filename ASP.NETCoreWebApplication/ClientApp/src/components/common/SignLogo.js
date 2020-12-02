import styled from "styled-components"

export const SignLogo = styled.div`
  background-image: url("signlogo.png");
  transform: rotate(20deg);
  opacity: 0.2;
  background-size: cover;
  background-position: center;
  height: 600px;
  width: 600px;
  transition: background-image .5s linear;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: absolute;
  ${props => (props.right ? "right" : "left")}: -200px;
  ${props => (props.bottom ? "bottom" : "top")}: 0px;
  z-index: 1;
          @media (max-width: 576px) {
            width: 100px;
            height: 100px;
        }
        @media (max-width: 768px) {
            width: 100px;
            height: 100px;
        }
        @media (max-width: 992px) {
            width: 100px;
            height: 100px;
        }
  
`

