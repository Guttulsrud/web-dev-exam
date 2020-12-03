import styled, {css} from 'styled-components';
import PropTypes from "prop-types"

export const Button = styled.button`
    position: relative;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${props => (props.outline ? "12px 40px 12px 40px" : "12px 40px 14px 40px")};
    margin-left:  ${props => (props.marginLeft ? "20px" : "0px")};
    border-radius: 15px;
    border: ${props => (props.outline ? "2px solid #0070D1" : props.disabled ? "2px solid #C4C4C4" : "none")};
    background-color: ${props => (props.outline ? "transparent" : props.disabled ? "none" : "#0070D1")};
    color: ${props => (props.outline ? "#0070D1" : props.disabled ? "#c4c4c4" : "#FFFFFF")};
    font-weight: 500;
    font-size: 1rem;
    max-width: 180px;
    height: 48px;
    cursor: ${props => (props.disabled ? "arrow" : "pointer")};
    line-height: 0;
    transition: .2s ease;
    z-index: ${props => props.zIndex ? props.zIndex : undefined};
    &:hover {
        transform: scale(1.03);
        text-decoration: none;
    }
    
   ${props => props.isWhite && css`
      border-color: #fff;
      color: #fff; 
      background: none;
      
      &:hover {
       background: none;
       text-decoration: none;
      }
    `
}   
`

Button.propTypes = {
    zIndex: PropTypes.number,
    isWhite: PropTypes.bool,
    outline: PropTypes.bool,
    marginLeft: PropTypes.bool,
    disabled: PropTypes.bool
}