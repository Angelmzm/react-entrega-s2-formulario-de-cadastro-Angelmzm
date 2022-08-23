import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, ContainerForm, Form } from "./style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext/UserContext";
import  { ICadastro }  from "../../context/UserContext/UserContext";
import logo from "../assets/logo.svg"


const UserRegister = () => {

  const { cadastro } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required(
        "Senha obrigatório"
      ) /*.matches("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/", "Senha invalida") */,
    passwordConfirm: yup
      .string()
      .required("Senha obrigatório")
      .oneOf([yup.ref("password")], "senhas diferentes"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Módulo obrigatório"),
  });

  const {register, handleSubmit, formState: { errors }, } = useForm<ICadastro>({ resolver: yupResolver(formSchema),});

  return (
    <Container>
      <div className="header">
        <img src={logo} alt="" />
        <button className="btnVoltar"> Voltar</button>
      </div>

      <ContainerForm className="containerForm">
        <div className="headerForm">
          <h1 className="h1Cadastro"> Crie sua conta</h1>
          <p className="descricaoCadastro"> Rapido e grátis, vamos nessa</p>
        </div>

        <Form onSubmit={handleSubmit(cadastro)} className="formCadastro">
          <p> Nome</p>
          <input placeholder="Digite aqui seu nome" {...register("name")} />
          {errors.name?.message}

          <p> Email</p>
          <input placeholder="Digite aqui seu email" {...register("email")} />
          {errors.email?.message}

          <p> Senha</p>
          <input
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("password")}
          />
          {errors.password?.message}

          <p> Confirmar Senha</p>
          <input
            placeholder="Confirme sua senha"
            type="password"
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm?.message}

          <p> Bio</p>
          <input placeholder="Fale sobre você" {...register("bio")} />
          {errors.bio?.message}

          <p> Contato</p>
          <input placeholder="Opção de contato" {...register("contact")} />
          {errors.contact?.message}

          <p> Selecionar módulo</p>
          <select {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              {" "}
              Primeiro Módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              {" "}
              Segundo Módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              {" "}
              Terceiro Módulo
            </option>
          </select>
          {errors.course_module?.message}

          <button type="submit">Cadastrar</button>
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
    </Container>
  );
};

export default UserRegister;
