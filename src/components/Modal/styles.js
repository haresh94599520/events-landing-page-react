import styled from "styled-components";
import { AbsoluteCenter } from "../../styles";

export const Modal = styled.div`
  ${AbsoluteCenter}
  padding: 60px;
  max-width: 800px;
  width: calc(100vw - 60px);
  z-index: 3;
  background: #fbfbfb;

  @media (max-width: 700px) {
    padding: 30px;
    width: calc(100vw - 30px);
  }
`;

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  z-index: 2;
`;

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;
  position: absolute;
  right: 60px;
  top: 60px;

  &::before,
  &::after {
    content: "";
    background: #0519de;
    position: absolute;
    height: 33px;
    width: 2px;
    left: 15px;
    top: 0;
  }

  &::before {
    /* background: #ff3333; */
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media (max-width: 700px) {
    right: 30px;
    top: 30px;
  }
`;
