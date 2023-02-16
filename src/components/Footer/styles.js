import styled from "styled-components";
import { Marginals } from "../../styles";

export const Footer = styled.footer`
  ${Marginals}
  grid-template-columns: auto 1fr auto;
  bottom: 0;
  padding: 15px;
`;

export const H2 = styled.h2`
  font-size: 64px;
  font-weight: 600;
  line-height: 0.7;
  padding: 15px;

  @media (max-width: 900px) {
    font-size: 44px;
  }

  @media (max-width: 700px) {
    font-size: 24px;
    padding: 0;
  }
`;

export const H2Middle = styled(H2)`
  position: relative;
  text-align: center;

  /* strike through line */
  &::after {
    content: "";
    background-color: #fbfbfb;
    display: block;
    position: absolute;
    height: 2px;
    top: 55%;
    left: 15px;
    right: 15px;
  }
`;
