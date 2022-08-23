import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #212529;
  margin: 15px;

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

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Main = styled.main`

  .headerMain {
    display: flex;
    justify-content: space-between;
    align-items: center;
  

     h1 {
      font-size: 14px;
      color: #f8f9fa;
      margin: 10px 8px 10px 8px ;
    }

    button {
      width: 32px;
      height: 32px;
      background-color: #212529;
      border: none;
      border-radius: 2px;
      margin: 10px 8px 10px 8px ;
      cursor: pointer;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    background-color: #212529;
    margin: 10px 4px 10px 4px ;
    border-radius: 2px;
  }
 
  .listItem {
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: #121214;
    margin: 10px 12px 8px 12px ;
    border-radius: 3px;

    h1 {
      font-size: 12px;
      color: #f8f9fa;
      margin: 5px 4px 5px 4px;
    }
  }

  .listAside {

    display: flex;
    align-content: center;

    p {
      font-size: 10px;
      color: #868e96;
      margin: 5px 4px 5px 4px;
    }
    button {
      display: none;
    }
  }

  @media (min-width: 450px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;

    .headerMain{
      width: 80%;
    }
    .list{
      width: 80%;
    }

    .listItem {
    h1 {
      font-size: 14px;
      margin: 8px 8px 8px 8px;
    }
  }

  .listAside {

    p {
      font-size: 12px;
      margin: 8px 8px 8px 8px;
    }
    button {
      display: block;
      background-color: #121214;
      margin: 8px 0px 8px 8px;
      border: none;
      cursor: pointer;
    }
  }
  }

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

    .headerMain{
      width: 70%;
    }
    .list{
      width: 70%;
    }

    .listItem {
    h1 {
      font-size: 16px;
      margin: 8px 8px 8px 8px;
    }

    
  .listAside {

    p {
      font-size: 14px;
      margin: 8px 8px 8px 8px;
    }

  }
  }

  @media (min-width: 858px) {

    .headerMain{
      width: 50%;
    }
    .list{
      width: 50%;
    }
  }
  }
`;
