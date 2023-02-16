import styled from "styled-components";

export const Container = styled.div`
  color: #000;
  max-width: 440px;
  margin: 0 auto;
`;

export const H4 = styled.h4`
  font-size: 34px;
  font-weight: 600;
  line-height: 1;
  color: #0519ce;
  margin-top: 20px;

  @media (max-width: 700px) {
    font-size: 24px;
  }
`;

export const H3 = styled.h3`
  font-size: 64px;
  font-weight: 600;
  line-height: 0.7;
  color: #0519ce;

  @media (max-width: 700px) {
    font-size: 48px;
  }
`;

export const P = styled.p`
  font-size: 16px;
  margin: 20px 0;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  /* svg {
    margin: 0 16px;
  } */
`;

export const SuccessContainer = styled(Container)`
  display: grid;
  place-items: center;
  margin: 50px auto;
  text-align: center;
`;
