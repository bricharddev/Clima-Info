import styled from "styled-components";
import { ContextoDados } from "../../context/Dados";
import { useContext } from "react";
import { IoSearch } from "react-icons/io5";

const Botao = styled.button`
  cursor: pointer;
  padding: 0 16px;
  border: none;
  flex: 1;
  text-align: right;
  margin: 0;
  outline: none;
  background: transparent;
  transition: all.3s;

  &:hover svg {
    fill: white;
  }
`;

const BotaoBusca = () => {
  const { input, buscarDados } = useContext(ContextoDados);

  return (
    <Botao onClick={() => buscarDados(input)} aria-label="Botão de busca">
      <IoSearch color="grey" size={20} />
    </Botao>
  );
};

export default BotaoBusca;
