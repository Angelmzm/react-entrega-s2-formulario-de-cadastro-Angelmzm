import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  border-bottom: solid 1px #212529;

  button {
    width: 55px;
    height: 30px;
    border: none;
    border-radius: 4px;
    background-color: #212529;
    color: #f8f9fa;
    font-size: 12px;
    margin: 20px 0px 20px 0px;
    cursor: pointer;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #212529;
  margin: 20px 0px 20px 0px;

  .name {
    color: #f8f9fa;
    font-size: 16px;
  }

  .modulo {
    color: #868e96;
    font-size: 12px;
  }

  @media (min-width: 768px){
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Main = styled.main`
  display: none;
  @media (min-width: 768px) {

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;

    h1 {
      color: #f8f9fa;
      font-size: 16px;
    }

    p {
      color: #868e96;
      font-size: 12px;
    }
  }
`;
