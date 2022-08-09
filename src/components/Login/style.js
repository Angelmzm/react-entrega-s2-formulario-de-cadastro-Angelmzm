import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px 10px 20px 10px;

  .headerLogin {
    width: 250px;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }
`;

export const ContainerForm = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212529;

  h1 {
    color: #f8f8fa;
    font-size: 16px;
  }
`;

export const Form = styled.form`

  display: flex;
  flex-direction: column;

  p {
    color: #f8f9fa;
    font-size: 12px;
  }
  input {
    width: 220px;
    height: 40px;
    color: #F8F9FA;
    font-size: 12px;
    background-color: #343b41;
    border: none;
    border-radius: 3px;
  }

  button{
    width: 220px;
    height: 40px;
    background-color: #FF577F;
    color: #ffffff;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  .descricaoLogin{
    text-align: center;
    color: #f8f9fa;
    font-size: 12px;
  }

  .btnCadastrarLogin{
    width: 220px;
    height: 40px;
    background-color: #868E96;
    color: #ffffff;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

`;
