import lixo from "../assets/lixo.svg";
import mais from "../assets/mais.svg";
import logo from "../assets/logo.svg";
import { Header } from "./style";
import { Description } from "./style";
import { Main } from "./style";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/UserContext/UserContext";
import { TechContext } from "../context/TechContext/TechContext";
import { ToastContainer } from "react-toastify";

import ModalTech from "../../modals/ModalTech";

const MainScreen = () => {
  const { user, setUser } = useContext(AuthContext);
  const { openModal } = useContext(TechContext);
  let navigate = useNavigate();

  function nav() {
    setUser([]);
    window.localStorage.clear();
    navigate("/");
  }

  return (
   
    <div>
      <Header>
        <img src={logo} alt="" />
        <button className="btnSair" onClick={nav}>
          Sair
        </button>
      </Header>
      <Description>
        <p className="name"> Olá, {user.name} </p>
        <p className="modulo"> {user.course_module}</p>
      </Description>
      <Main>
        <div className="headerMain">
          <h1> Tecnologias </h1>
          <button className="BtnAdd" onClick={openModal}>
            {" "}
            <img src={mais} alt="" />{" "}
          </button>
        </div>

        <Tecnologias />
        <ModalTech> </ModalTech>
      </Main>
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
    </div> 
  );
};

export default MainScreen;

const Tecnologias = () => {
  const { techs, techDelete } = useContext(TechContext);

  return (
    <div className="list">
      {techs?.map((item) => (
        <div className="listItem" key={item.id}>
          <h1> {item.title}</h1>
          <div className="listAside">
            <p> {item.status} </p>
            <button
              onClick={() => {
                techDelete(item.id);
              }}
            >
              {" "}
              <img src={lixo} alt="" />{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
