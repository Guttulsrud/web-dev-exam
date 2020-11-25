import styled from "styled-components"

export const CarouselOverlay = styled.div`
  background-image: linear-gradient(to bottom, #000000b9 5%, #00000000 95%), url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`