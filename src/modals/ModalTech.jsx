import Modal from "react-modal";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { TechContext } from "../components/context/TechContext/TechContext";
import { ToastContainer } from "react-toastify";
import { ModalHeader } from "./style";
import { ModalContainer } from "./style";
import { ModalForm } from "./style";
import "../modals/style.css";

const ModalTech = () => {
  const { tech, modalIsOpen, closeModal } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Tecnologia obrigatória"),
    status: yup.string().required("Status obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <ModalContainer>
          <ModalHeader>
            <h1> Cadastrar Tecnologia</h1>
            <button onClick={closeModal}> x </button>
          </ModalHeader>

          <ModalForm onSubmit={handleSubmit(tech)}>
            <div>
              <p> Nome</p>
              <input placeholder="Tecnologia" {...register("title")} />
              {errors.title?.message}

              <p> Selecionar status </p>
              <select {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              {errors.status?.message}
            </div>
            <button type="submit" className="btnCadastroTech">
              {" "}
              Cadastrar Tecnologia{" "}
            </button>
          </ModalForm>
        </ModalContainer>
      </Modal>
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
    </>
  );
};

export default ModalTech;
