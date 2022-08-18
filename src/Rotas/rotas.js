
import { Routes, Route } from "react-router-dom";
import UserRegister from "../components/UserRegister/UserRegister";
import Login from "../components/Login/Login";
import MainScreen from "../components/MainScreen/MainScreen";

const Rotas = ({user, setUser}) => {
  return (
    <Routes>
      <Route path="/" element={<Login user={user} setUser={setUser}/>} />  
      <Route path="/cadastro" element={<UserRegister />}/>
      <Route path="/main" element={<MainScreen  user={user} setUser={setUser} />} />
    </Routes>
  );
};

export default Rotas;