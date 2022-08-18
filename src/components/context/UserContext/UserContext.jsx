import { createContext } from "react";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState([]);
  const [list, setList] = useState([])
  let navigate = useNavigate();

  function login(data) {
    api
      .post("/sessions", data)
      .then((response) => {
        console.log(response.data);
        setUser(response.data.user);
        setList(response.data.user.techs)
        console.log(response.data.user.techs)
        window.localStorage.clear();
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("userId", response.data.user.id);
        navigate("/main") ;
      })
      .catch((err) => {
        console.log(err);
        toast.error("E-mail ou senha incorretos");
      });
  }

  function cadastro(data) {
      api
      .post("/users", data)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  }

  useEffect(() => {

    const token = localStorage.getItem("token");
    const id = localStorage.getItem('userId')

    async function Profile(){
    if (token) {
      try {
        await api.get("/profile")
        .then((response) => {
          console.log(response.data);
          setUser(response.data)
          setList(response.data.techs)
        });
      } catch (error) {
        console.log(error);
        localStorage.removeItem(token)
        localStorage.removeItem(id)
      }
    }}
    Profile()
  }, []); 

  return (
    <AuthContext.Provider value={{ user, setUser, login, cadastro, list, setList }}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
