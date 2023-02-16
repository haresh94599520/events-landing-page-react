import styled from "styled-components";
import { ReactComponent as LogoSVG } from "./logo.svg";
import { Marginals } from "../../styles";

export const Logo = styled(LogoSVG)`
  width: 100%;
  max-width: 760px;
  height: auto;
`;

export const Header = styled.header`
  ${Marginals}
  justify-content: center; // center the logo
  padding: 30px;

  @media (max-width: 700px) {
    padding: 15px;
  }
`;
