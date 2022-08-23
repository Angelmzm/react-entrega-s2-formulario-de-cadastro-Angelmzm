
import { Routes, Route } from "react-router-dom";
import UserRegister from "../components/UserRegister/UserRegister";
import Login from "../components/Login/Login";
import MainScreen from "../components/MainScreen/MainScreen";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />  
      <Route path="/cadastro" element={<UserRegister />}/>
      <Route path="/main" element={<MainScreen />} />
    </Routes>
  );
};

export default Rotas;