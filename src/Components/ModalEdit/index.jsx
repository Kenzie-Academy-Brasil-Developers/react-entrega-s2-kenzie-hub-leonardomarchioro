import { toast } from "react-toastify";
import { colorPrimary, primary50, grey1, grey2 } from "../../styles/Global";
import {
  ContainerModal,
  Modal,
  ContainerSelect,
  Label,
  ContainerButtons,
} from "./style";
import Button from "../Button";
import Input from "../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../Services/api";

const ModalEdit = ({ setEditAct, cardEditNow, token, updateList }) => {
  const schema = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const removeTech = () => {
    api
      .delete(`/users/techs/${cardEditNow.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setEditAct(false);
        updateList();
        toast.success("Tecnologia removida com sucesso!");
      })
      .catch((_) => toast.error("Falha ao tentar remover"));
  };

  const EditTech = (data) => {
    api
      .put(`/users/techs/${cardEditNow.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setEditAct(false);
        updateList();
        toast.success("Tecnologia atualizada com sucesso!");
      })
      .catch((_) => toast.error("Falha na atualização"));
  };

  return (
    <ContainerModal>
      <Modal>
        <header>
          <h2>Tecnologia Detalhes</h2>
          <Button
            text="X"
            type="button"
            style={grey1}
            hover={grey2}
            onClick={() => setEditAct(false)}
          />
        </header>
        <form onSubmit={handleSubmit(EditTech)}>
          <Input
            label="Nome do projeto"
            register={register}
            name="title"
            error={errors.name?.message}
            value={cardEditNow.title}
          />
          <div>
            <Label>Selecionar status</Label>
            <ContainerSelect>
              <select name="Status" {...register("status")}>
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
            </ContainerSelect>
          </div>
          <ContainerButtons>
            <section>
              <Button
                text="Cadastrar Tecnologia"
                type="submit"
                style={colorPrimary}
                hover={primary50}
              />
              <div>
                <Button
                  text="Excluir"
                  type="button"
                  style={grey1}
                  hover={grey2}
                  onClick={removeTech}
                />
              </div>
            </section>
          </ContainerButtons>
        </form>
      </Modal>
    </ContainerModal>
  );
};
export default ModalEdit;
