
import styled from "styled-components";

export const Container = styled.div`
  background-color: #121214;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 10px 20px 10px;
    img {
    }
    button {
      width: 50px;
      height: 30px;
      background-color: #212529;
      color: #f8f9fa;
      font-size: 14px;
      border-radius: 5px;
      border: none;
      margin-right: 10px;
    }
  }
`;

export const ContainerForm = styled.div`

  background-color: #212529;
  width: 250px;
  display: flex;
  flex-direction: column;

  .headerForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;

    h1 {
      color: #f8f8fa;
      font-size: 16px;
    }
    p {
      color: #868e96;
      font-size: 12px;
    }
  }
`;

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  margin-left: 15px;

  p{
    color: #F8F9FA;
    font-size: 10px;
  }
  input{
    width: 220px;
    height: 40px;
    color: #868E96;
    font-size: 12px;
    background-color: #343B41 ;
    border: none;
    border-radius: 3px;
  }

  select{
    width: 220px;
    height: 40px;
    color: #868E96;
    font-size: 12px;
    background-color: #343B41 ;
    border: none;
    border-radius: 3px;
    text-align: center;
  }

  button{
    width: 220px;
    height: 40px;
    background-color: #59323F;
    color: #ffffff;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
`;
