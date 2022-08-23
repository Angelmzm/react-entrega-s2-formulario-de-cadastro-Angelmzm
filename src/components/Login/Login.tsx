import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../assets/logo.svg";
import { ContainerLogin, ContainerForm, Form } from "./style";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext/UserContext";
import { ILogin } from "../../context/UserContext/UserContext";



const Login = () => {
  const { login } = useContext(AuthContext);
  let navigate = useNavigate();

  function navCadastro() {
    navigate("/cadastro");
  }

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatório"),
  });

  const {register,handleSubmit, formState: { errors },} = useForm<ILogin>({ resolver: yupResolver(formSchema), });

  return (
    <ContainerLogin className="containerLogin">
      <div className="headerLogin">
        <img src={logo} alt="" />
      </div>

      <ContainerForm className="containerForm">
        <h1> Login </h1>

        <Form className="formLogin" onSubmit={handleSubmit(login)}>
          <p> Email </p>
          <input placeholder="Digite aqui seu email" {...register("email")} />
          {errors.email?.message}

          <p> Senha </p>
          <input
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("password")}
          />
          {errors.password?.message}

          <button className="btnLogar"> Entrar</button>

          <p className="descricaoLogin"> Ainda não possui uma conta?</p>
          <button className="btnCadastrarLogin" onClick={navCadastro}>
            {" "}
            Cadastre-se
          </button>
        </Form>
      </ContainerForm>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ContainerLogin>
  );
};

export default Login;
