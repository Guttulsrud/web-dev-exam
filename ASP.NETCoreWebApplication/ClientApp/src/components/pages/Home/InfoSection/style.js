import styled from "styled-components"

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`

export const VideoOverlay = styled.div`
   height: 100%;
   width: 100%;
   position: absolute;
   top: 0;
   left: 0; 
   background-color: #0072ecdc;
   z-index: 10;
`
