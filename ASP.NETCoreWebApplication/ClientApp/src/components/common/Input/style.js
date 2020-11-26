import styled, {css, keyframes} from 'styled-components';
import Form from 'react-bootstrap/Form';

const Stretch = keyframes`
  from {
  width: 0
  } 
  to {
   width: 100%;
  }
`;

const Collapse = keyframes`
  from {
  width: 100%
  } 
  to {
   width: 0;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const FocusLine = styled.div`
  height: 2px;
  width: ${props => props.filled ? "100%" : 0};
  bottom: 0;
  position: absolute;
  background-color: #0072ce;
  border-radius: 10px;
  ${props => ( props.isFocused) && css`
  animation: ${Stretch} 0.2s ease-out forwards;
`
}
  ${props => ( !props.isFocused && props.hadFocus) && css`
  animation: ${Collapse} 0.2s ease-out forwards;
`}

`;

export const StyledInput = styled(Form.Control)`
  padding-top: 25px;
  padding-bottom: 20px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #b9b9b9;
  ${props => props.filled && css`

  `
  }
   
  &:focus { 
  box-shadow: none;
  }
`;

export const Label = styled(Form.Label)`
  position: absolute;
  pointer-events: none;
  margin-bottom: 0;
  left: 12px;
  top: 15px;
  transition: 0.1s linear;
  color: #b9b9b9;
   
  ${props => props.filled && css`
    top: 0;
    font-size: .7rem;
    color: #0072ce;
`}
  ${StyledInput}:focus ~ & {
    top: 0;
    font-size: .7rem;
    color: #0072ce; 
  }
`;