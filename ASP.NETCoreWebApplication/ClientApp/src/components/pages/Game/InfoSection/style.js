import styled from 'styled-components';
import PropTypes from 'prop-types';

export const BoxArtWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Price = styled.div`
    display: inline-block;
    padding-left: 20px;
    padding-top: 8px;
    padding-right: 20px;
    padding-bottom: 8px;
    margin-top: 30px;
    color: #007aff;
    font-size: 1rem;
    font-weight: 500;
    border: 2px solid #007aff;
    border-radius: 15px;
    width: 160px;
    text-align: center;


`;

export const BoxArt = styled.div`
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 400px;
    height: 400px;
    position: relative;
`;

BoxArt.propTypes = {
    backgroundImage: PropTypes.string.isRequired
};