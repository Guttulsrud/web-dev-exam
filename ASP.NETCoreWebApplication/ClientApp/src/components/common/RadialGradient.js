import styled from "styled-components"

export const RadialGradient = styled.div`
    background: radial-gradient(50% 50% at 50% 50%, rgba(196, 196, 196, 1) 0%, rgba(196, 196, 196, 0) 100%);
    width: 2000px;
    height: 2000px;
    position: absolute;
    top: -1000px;
    left: -1000px;
    z-index: 0;
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

