import { createContext, Dispatch, ReactNode, SetStateAction } from "react";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export interface IUser {
    avatar_url: string | null
    contact: string
    bio: string
    course_module: string
    created_at: string
    email: string
    id: string | null
    name: string
    techs?: object[]
    updated_at: string
    works?: object[]
}

export interface IList {
    created_at: string
    id: string
    status: string
    title: string
    updated_at: string
}
export interface ICadastro {
    name: string
    email: string
    password: string
    passwordConfirm: string
    bio: string
    contact: string
    course_module: string
}

export interface ILogin {
    email: string
    password: string
}


interface IUserProviderProps {
    children: ReactNode
}

interface IUserContext {
    user: IUser;
    list: IList[]
    login: (data: { email: string; password: string; }) => void
    cadastro: (data: ICadastro) => void
    setList: Dispatch<SetStateAction<IList[]>>
}



export const AuthContext = createContext<IUserContext>({} as IUserContext);

const AuthProvider = ({ children }: IUserProviderProps) => {


    const [user, setUser] = useState<IUser>({} as IUser);
    const [list, setList] = useState<IList[]>([])

    let navigate = useNavigate();

    function login(data: ILogin ) {
        api
            .post("/sessions", data)
            .then((response) => {
                console.log(response.data);
                setUser(response.data.user);
                setList(response.data.user.techs)
                console.log("LIST", list)
                window.localStorage.clear();
                window.localStorage.setItem("token", response.data.token);
                window.localStorage.setItem("userId", response.data.user.id);
                navigate("/main");
            })
            .catch((err) => {
                console.log(err);
                toast.error("E-mail ou senha incorretos");
            });
    }

    function cadastro(data: ICadastro) {
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
        const userId = localStorage.getItem('userId')

        async function Profile() {
            if (token) {
                try {
                    await api.get("/profile")
                        .then((response) => {
                            console.log("Response", response)
                            console.log(response.data);
                            setUser(response.data)
                            setList(response.data.techs)
                        });
                } catch (error) {
                    console.log(error);
                    localStorage.removeItem(token)
                    localStorage.removeItem(userId!)
                }
            }
        }
        Profile()
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, cadastro, list, setList }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
