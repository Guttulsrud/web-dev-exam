import styled, {css} from 'styled-components';

export const HeaderWrapper = styled.section`
  background-image:  /*linear-gradient( #0072ceb9, #0072ce33),*/ url(${props => props.backgroundImage});
  background-size: cover;
  min-height: 100vh;
  transition: background-image .5s linear;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const CardWrapper = styled.div`
    background-image: linear-gradient(to top, #000000b9 5%, #00000000 95%), url(${props => props.backgroundImage});
    background-size: 100% 100%;
    padding: 0;
    transition: .2s linear;
    width: 100%;
    position: relative;
    height: 400px;
    border-radius: 15px;
    ${props => props.isActive && css`
    transform: scale(1.2);
`
}   
`;

export const TitleText = styled.h1`
    color: #fff;
    bottom: 20px;
    left: 10px;
    position: absolute;
`;
