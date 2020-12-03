import styled, {css, keyframes} from 'styled-components';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

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
  width: 100%;
`;

export const FocusLine = styled.div`
  height: 3px;
  bottom: 0;
  position: absolute;
  background-color: ${props => props.transparent ? '#5eb6ff' : '#0072ce'};
  border-radius: 10px;
  color: #ffffff;
  ${props => (props.isFocused) && css`
  animation: ${Stretch} 0.2s ease-out forwards;
`
}
  ${props => (!props.isFocused && props.hadFocus) && css`
  animation: ${Collapse} 0.2s ease-out forwards;
`}

`;

export const StyledInput = styled.input`
  padding-top: 25px;
  padding-bottom: 10px;
  border: none;
  width: 100%;
  border-radius: 0;
  color: ${props => (props.transparent ? '#FFFFFF' : '#333333')};
  border-bottom: ${props => (props.transparent ? '2px solid #FFFFFF' : '1px solid #b9b9b9')};
  background-color: ${props => (props.transparent ? 'transparent' : '#FFFFFF')};
  outline: none;
}
   
  &:focus { 
  box-shadow: none;
  background-color: ${props => (props.transparent ? 'transparent' : '#FFFFFF')};
  color: ${props => (props.transparent ? '#FFFFFF' : '#333333')};
  }
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  margin-bottom: 0;
  left: ${props => (props.transparent ? '0px' : '12px')};
  top: 30px;
  transition: 0.1s linear;
  color: ${props => (props.transparent ? '#ffffff' : '#b9b9b9')};
   
  ${props => props.filled && css`
    top: 10px;
    font-size: .7rem;
    color: ${props => (props.transparent ? '#ffffff' : '#0072ce')};
`}
   ${props => props.isFocused && css`
    top: 10px;
    font-size: .7rem;
    color: ${props => (props.transparent ? '#ffffff' : '#0072ce')}; 
`
}
`;

FocusLine.propTypes = {
    isFocused: PropTypes.bool.isRequired,
    transparent: PropTypes.bool
};

Label.propTypes = {
    filled: PropTypes.bool.isRequired,
    transparent: PropTypes.bool,
    isFocused: PropTypes.bool.isRequired
};

StyledInput.propTypes = {
    filled: PropTypes.bool.isRequired,
    transparent: PropTypes.bool
};