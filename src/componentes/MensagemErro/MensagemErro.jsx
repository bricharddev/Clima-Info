/* eslint-disable react/prop-types */
import styled from "styled-components";

const Mensagem = styled.span`
  text-align: center;
  border-radius: 24px;
  padding: 16px;
  margin-bottom: 8px;
  background: #9c0404;
`;

const ParagrafoErro = styled.p`
  padding: 0;
  margin: 0;
  font-size: 18px;
  letter-spacing: 1px;
  color: white;
`;

const MensagemErro = ({ error }) => (
  <>
    {error && (
      <Mensagem>
        <ParagrafoErro>{error}</ParagrafoErro>
      </Mensagem>
    )}
  </>
);

export default MensagemErro;
