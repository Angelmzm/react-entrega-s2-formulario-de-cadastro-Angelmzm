
import logo from "../assets/logo.svg";
import { Header } from "./style";
import { Description } from "./style";
import { Main } from "./style";
import { useNavigate } from "react-router-dom";

const MainScreen = ({user, setUser}) => {

  console.log(user)
  let navigate = useNavigate();

  function nav() {
    setUser([])
    window.localStorage.clear()
    navigate("/")
  }

  return (
    <div>
      <Header>
        <img src={logo} alt="" />
        <button className="btnSair"  onClick={nav} > Sair</button>
      </Header>
      <Description>
        <p className="name"> Olá, {user.name} </p>
        <p className="modulo"> {user.course_module}</p>
      </Description>
      <Main>
        <h1> Que pena! Estamos em desenvolvimento  </h1>
        <p> Nossa aplicação está em desenvolvimento, em breve teremos novidades </p>
      </Main>
    </div>
  );
};

export default MainScreen;
