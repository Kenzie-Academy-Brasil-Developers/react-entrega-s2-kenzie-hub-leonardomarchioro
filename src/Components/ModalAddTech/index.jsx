import Button from "../Button";
import Input from "../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { colorPrimary, primary50, grey1, grey2 } from "../../styles/Global";
import { ContainerModal, Modal, ContainerSelect, Label } from "./style";

const ModalAddTech = ({
  setAddTech,
  setTechList,
  techList,
  setIdCard,
  idCard,
}) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    level: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const add = (data) => {
    setIdCard(idCard + 1);
    setTechList([...techList, { ...data, id: idCard }]);
    toast.success("Tecnologia cadastrada com sucesso!");
    setAddTech(false);
  };

  return (
    <ContainerModal>
      <Modal>
        <header>
          <h2>Cadastrar Tecnologia</h2>
          <Button
            text="X"
            type="button"
            style={grey1}
            hover={grey2}
            onClick={() => setAddTech(false)}
          />
        </header>
        <form onSubmit={handleSubmit(add)}>
          <Input
            label="Nome"
            register={register}
            name="name"
            error={errors.name?.message}
            placeholder="Tecnologia"
          />
          <div>
            <Label>Selecionar status</Label>
            <ContainerSelect>
              <select name="Selecionar status" {...register("level")}>
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
            </ContainerSelect>
          </div>

          <Button
            text="Cadastrar Tecnologia"
            type="submit"
            style={colorPrimary}
            hover={primary50}
          />
        </form>
      </Modal>
    </ContainerModal>
  );
};
export default ModalAddTech;
