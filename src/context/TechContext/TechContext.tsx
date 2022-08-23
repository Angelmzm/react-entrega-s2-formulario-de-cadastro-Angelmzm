
import api from "../../services/api";
import { toast } from "react-toastify";
import { AuthContext, IList } from "../UserContext/UserContext";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { useContext } from "react";


interface ITechProviderProps {
  children: ReactNode
}

 interface ITechContext {
  tech: (data: IList) => Promise<void>
  techDelete: (id: string) => void
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  openModal: () => void
  closeModal: () => void
  techs: IList[]
}


export const TechContext = createContext<ITechContext>({} as ITechContext);

const TechProvider = ({children} : ITechProviderProps) => {

    const { list} = useContext(AuthContext);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [techs, setTechs] = useState<IList[]>(list)

    const userId= localStorage.getItem("userId")

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    useEffect ( () => {
      setTechs(list)
      
    }, [list]) 
    
  async function tech(data: IList) : Promise<void> {
    api
      .post("/users/techs", data)
      .then( async (response) => {
        console.log("data",response.data)
        setTechs([...techs, response.data])
        window.localStorage.setItem("techId", response.data.id)
        toast.success("Tecnologia Cadastrada")
      })
      .catch((err) => {
        console.log(err);
        toast.error("Tecnologia já cadastrada");
      });
  }
      function techDelete(id: string) {
        
        api
          .delete(`/users/techs/${id}`)
          .then(() => {
            api.get(`/users/${userId}`)
            .then( (response) => {
              setTechs(response.data.techs)
              toast.success("Tecnologia apagada com sucesso")
            })
          })
          .catch((err) => {
            console.log(err);
            toast.error("Não foi possível deletar essa tecnologia");
          });
      }

    return (
        <TechContext.Provider value={{ tech, techDelete, modalIsOpen, setIsOpen, openModal, closeModal, techs }}>
            {children}
        </TechContext.Provider>
      );
}

export default TechProvider