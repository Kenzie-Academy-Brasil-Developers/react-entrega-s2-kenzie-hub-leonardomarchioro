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

const ModalEdit = ({
  setEditAct,
  setTechList,
  techList,
  cardEditNow,
  setIdCard,
  idCard,
}) => {
  const schema = yup.object().shape({
    name: yup.string(),
    level: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const removeTech = () => {
    const update = techList.find((tech) => tech === cardEditNow);
    const remove = techList.filter((tech) => tech !== update);
    setTechList(remove);
    setEditAct(false);
    toast.success("Tecnologia removida com sucesso");
  };

  const EditTech = (data) => {
    setIdCard(idCard + 1);
    const update = techList.find((tech) => tech === cardEditNow);
    const remove = techList.filter((tech) => tech !== update);

    if (data.name.length < 1) {
      data.name = cardEditNow.name;
    }
    addTech(data, remove);
  };

  const addTech = (data, remove) => {
    setTechList([...remove, { ...data, id: idCard }]);
    setEditAct(false);
    toast.success("Tecnologia atualizada com sucesso");
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
            name="name"
            error={errors.name?.message}
            placeholder={cardEditNow.name}
          />
          <div>
            <Label>Selecionar status</Label>
            <ContainerSelect>
              <select name="Status" {...register("level")}>
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
