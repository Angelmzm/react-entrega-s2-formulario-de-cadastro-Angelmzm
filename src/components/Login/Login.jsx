import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import logo from "../assets/logo.svg";
import { ContainerLogin, ContainerForm, Form } from "./style";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ user, setUser }) => {
  let navigate = useNavigate();

  function navCadastro() {
    navigate("/cadastro");
  }

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function cadastro(data) {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        console.log(response.data);
        window.localStorage.clear();
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("userId", response.data.user.id);
        setUser(response.data.user);
        navigate("/main");
      })
      .catch((err) => {
        console.log(err);
        toast.error("E-mail ou senha incorretos");
      });
  }

  return (
    <ContainerLogin className="containerLogin">
      <div className="headerLogin">
        <img src={logo} alt="" />
      </div>

      <ContainerForm className="containerForm">
        <h1> Login </h1>

        <Form className="formLogin" onSubmit={handleSubmit(cadastro)}>
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
