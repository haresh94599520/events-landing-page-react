import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
  }

body {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  color: #fbfbfb;
  font-weight: 500;
  /* background: #2828e6; */
  background-color: #2423e3;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

`;

export const Marginals = css`
  width: 100vw;
  display: grid;
  position: fixed;
  z-index: 1;
  pointer-events: none;
`;

export const AbsoluteCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 400px;
  height: 600px;
`;

export const Wrapper = styled.section`
  display: grid;
  place-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Button = styled.button`
  ${AbsoluteCenter}
  background: none;
  color: #fbfbfb;
  border: 2px solid #fbfbfb;
  border-radius: 100%;
  cursor: pointer;
  font-size: 34px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  padding: 25px 0 20px;
  width: 300px;
  font-family: inherit;
  z-index: 1;

  @media (max-width: 700px) {
    font-size: 24px;
    width: 220px;
  }
`;
