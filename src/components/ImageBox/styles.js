import styled from "styled-components";
import imageURL from "../../assets/image1.jpeg";

export const Image = styled.div.attrs(({ $movedX, $movedY }) => ({
  style: {
    transform: `translate(${$movedX}px, ${$movedY}px)`,
  },
}))`
  background-image: url(${imageURL});
  background-size: 400px 600px;
  background-position: ${({ $initialX, $initialY }) =>
    `-${$initialX * 100}px -${$initialY * 100}px`};
  height: 100px;
  width: 100px;
  position: relative;
`;
