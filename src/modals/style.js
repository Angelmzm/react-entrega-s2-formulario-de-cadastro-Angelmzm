 
import styled from "styled-components";
 
export const ModalContainer = styled.div`
  background-color: #212529;
  width: 290px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  .btnCadastroTech{
    width: 265px;
    height: 38px;
    background-color: #FF577F ;
    border: none;
    margin: 15px 10px 5px 15px;
    border-radius: 5px;
    color: #f8f9fa;
    font-size: 14px;
    margin-bottom: 20px;
   
  }
 
`;
 
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #343b41;
  width: 290px;
  height: 40px;
 
  h1 {
    font-size: 14px;
    color: #f8f9fa;
    margin-left: 10px;
  }
  button {
    font-size: 16px;
    color: #868e96;
    background-color: #343b41;
    border: none;
    cursor: pointer;
    margin-right: 5px;
  }
`;
 
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
 
  p {
    font-size: 12px;
    color: #f8f9fa;
    margin: 15px 10px 5px 15px;
  }
  input{
    width: 265px;
    height: 30px;
    margin: 15px 10px 5px 15px;
    color: #f8f9fa;
    background-color:#343b41 ;
    border: none;
    margin: 15px 10px 5px 15px;
    border-radius: 5px;
  }
 
  select{
    width: 265px;
    height: 30px;
    margin: 15px 10px 5px 15px;
    color: #f8f9fa;
    background-color: #343b41;
    border: none;
    margin: 15px 10px 5px 15px;
    border-radius: 5px;
    border: 1px solid #f8f9fa;
  }
  input::placeholder{
   color: #f8f9fa;
   
 
}
input:placeholder-shown {
   border: 1px solid #f8f9fa;
}
 
`;
 

