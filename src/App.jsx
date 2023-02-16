import { Button, GlobalStyle, ImageContainer, Wrapper } from "./styles";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import ImageBox from "./components/ImageBox";
import { useState } from "react";
import Modal from "./components/Modal";
import ModalInnerComponent from "./components/ModalInner";

// prettier-ignore
const matrix = [
  [0,0], [1,0], [2,0], [3,0],
  [0,1], [1,1], [2,1], [3,1],
  [0,2], [1,2], [2,2], [3,2],
  [0,3], [1,3], [2,3], [3,3],
  [0,4], [1,4], [2,4], [3,4],
  [0,5], [1,5], [2,5], [3,5]
];

function App() {
  // 1 - scattered 0 - unified image
  const [distance, setDistance] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const easing = (num) => {
    return Math.pow(num, 3);
  };

  const calculateDistance = ([x, y]) => {
    // center [x, y] co-ord
    const center = [window.innerWidth / 2, window.innerHeight / 2];
    // hypot -> sqrt(sqr(a) + sqr(b))
    // finding hypotenuse from center
    const maxHypot = Math.hypot(center[0], center[1]);
    // finding hyp for cursor position from (relative to) center
    const hypot = Math.hypot(center[0] - x, center[1] - y);
    const distance = hypot / maxHypot;
    const easeDistance = easing(distance);
    setDistance(easeDistance);
  };

  const handleMove = ({ clientX, clientY }) => {
    calculateDistance([clientX, clientY]);
  };

  const handleTouchMove = ({ touches }) => {
    calculateDistance([touches[0].clientX, touches[0].clientY]);
  };

  // console.log(distance);

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <>
      <GlobalStyle />
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <ModalInnerComponent />
        </Modal>
      )}
      <HeaderComponent />
      <FooterComponent />
      <Wrapper onMouseMove={handleMove} onTouchMove={handleTouchMove}>
        <ImageContainer>
          <Button onClick={toggleModal}>Sign up for updates</Button>
          {matrix.map(([x, y], index) => (
            <ImageBox key={index} x={x} y={y} percent={distance} />
          ))}
        </ImageContainer>
      </Wrapper>
    </>
  );
}

export default App;
