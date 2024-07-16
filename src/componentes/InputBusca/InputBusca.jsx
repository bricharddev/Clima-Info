/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import styled from "styled-components";
import { ContextoDados } from "../../context/Dados";
import BotaoBusca from "../BotaoBusca/BotaoBusca";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
  border-radius: 24px;
  padding: 16px;
  background: #073a78;

  &:nth-child() {
    background-color: black;
  }

  border: ${(props) => (props.$focoAtivo ? "2px solid white" : "none")};
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;
  width: 90%;
  font-size: 16px;
  color: white;

  &::placeholder {
    font-size: 16px;
    color: grey;
  }
`;

const InputBusca = () => {
  const [foco, setFoco] = useState(false);
  const { input, setInput, buscarDados } = useContext(ContextoDados);

  const buscarDadosComEnter = (e) => {
    if (e.key === "Enter") buscarDados(input);
    return;
  };

  return (
    <InputContainer $focoAtivo={foco}>
      <IoLocationOutline color="grey" size={20} />
      <Input
        type="text"
        placeholder="Digite o nome do local"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => buscarDadosComEnter(e)}
        onFocus={() => setFoco(true)}
        onBlur={() => setFoco(false)}
      />
      <BotaoBusca />
    </InputContainer>
  );
};

export default InputBusca;
