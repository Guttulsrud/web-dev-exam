import React from 'react';
import {Rotation} from './style';
import PropTypes from "prop-types"

const ArrowIcon = (props) => {
    return (
        <Rotation rotation={props.rotate}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.96888 14.4691C7.03854 14.3993 7.12131 14.3439 7.21242 14.3061C7.30354 14.2682 7.40122 14.2488 7.49988 14.2488C7.59853 14.2488 7.69621 14.2682 7.78733 14.3061C7.87844 14.3439 7.96121 14.3993 8.03088 14.4691L11.9999 18.4396L15.9689 14.4691C16.1097 14.3283 16.3007 14.2492 16.4999 14.2492C16.699 14.2492 16.89 14.3283 17.0309 14.4691C17.1717 14.6099 17.2508 14.801 17.2508 15.0001C17.2508 15.1993 17.1717 15.3903 17.0309 15.5311L12.5309 20.0311C12.4612 20.101 12.3784 20.1564 12.2873 20.1942C12.1962 20.232 12.0985 20.2515 11.9999 20.2515C11.9012 20.2515 11.8035 20.232 11.7124 20.1942C11.6213 20.1564 11.5385 20.101 11.4689 20.0311L6.96888 15.5311C6.89903 15.4615 6.84362 15.3787 6.80581 15.2876C6.768 15.1965 6.74854 15.0988 6.74854 15.0001C6.74854 14.9015 6.768 14.8038 6.80581 14.7127C6.84362 14.6216 6.89903 14.5388 6.96888 14.4691Z"
                    fill={props.outline ? "#0070D1" : props.disabled ? "#C4C4C4" : "#ffffff"}/>
                <path
                    d="M12 3.75C12.1989 3.75 12.3897 3.82902 12.5303 3.96967C12.671 4.11032 12.75 4.30109 12.75 4.5V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V4.5C11.25 4.30109 11.329 4.11032 11.4697 3.96967C11.6103 3.82902 11.8011 3.75 12 3.75Z"
                    fill={props.outline ? "#0070D1" : props.disabled ? "#C4C4C4" : "#ffffff"}/>
            </svg>
        </Rotation>
    )
}

ArrowIcon.propTypes = {
    rotate: PropTypes.string.isRequired,
    outline: PropTypes.bool
}

export default ArrowIcon;