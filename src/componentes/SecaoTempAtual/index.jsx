import styled from "styled-components";
import { useContext } from "react";
import { ContextoDados } from "../../context/Dados.jsx";
import { GiSunrise, GiSunset } from "react-icons/gi";
import CircularProgress from "@mui/joy/CircularProgress";
import LinearProgress from "@mui/joy/LinearProgress";
import "@fontsource/inter";
import { FaWind } from "react-icons/fa6";
import InputBusca from "../InputBusca/InputBusca";
import formatarPressao from "../../utils/FormatarPressao.js";
import MensagemErro from "../MensagemErro/MensagemErro.jsx";

const SecaoEstilizada = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  @media screen and (width < 920px) {
    width: 90%;
    margin: auto;
  }
`;

const TempAtualContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  background: #073a78;
  padding: 6px 12px;
  border-radius: 16px;
`;

const Box = styled.div`
  color: white;
`;

const Titulo = styled.h1`
  letter-spacing: 0.5px;
  font-size: 18px;
  font-weight: 400;
`;

const CelsiusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CelsiusInfo = styled.h2`
  letter-spacing: 0.5px;
  font-size: 58px;
  padding: 0;
  margin: 0;
  font-weight: 500;
`;

const Cidade = styled.h3`
  letter-spacing: 0.5px;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
`;

const MinMax = styled.p`
  letter-spacing: 0.5px;
  font-size: 14px;
  padding: 0;
  color: #a8a8a8;
  font-weight: 500;
`;

const SensacaoTermica = styled.p`
  color: #a8a8a8;
  margin: 4px 0 0 0;
  text-transform: capitalize;
  padding: 0;
`;

const Descricao = styled.p`
  font-size: 18px;
  text-align: right;
  margin: 0;
  padding: 0;
  text-transform: capitalize;
`;

const Icone = styled.img`
  width: 66px;
  height: 66px;
`;

const CondAtualContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 14px;
  border-radius: 16px;
`;

const Container = styled.div`
  grid-column: span 6;
  background: #073a78;
  border-radius: 16px;
  padding: 6px 12px;
`;

const TituloCondAtuais = styled.h2`
  color: white;
  letter-spacing: 0.5px;
  font-size: 18px;
  font-weight: 400;
  margin-top: 16px;
`;

const TituloInfos = styled.h3`
  letter-spacing: 0.5px;
  color: white;
  text-align: left;
  width: fit-content;
  margin: 0;
  padding-top: 4px;
  font-size: 16px;
  font-weight: 500;
`;

const SubtituloInfos = styled.h4`
  letter-spacing: 0.5px;
  margin: 4px 0;
  color: #a8a8a8;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Valores = styled.p`
  padding: 0;
  margin: 0;
  color: white;
  font-size: 22px;
`;

const InfoProgesso = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ValoresContainer = styled.div``;

const GraficoContainer = styled.div``;

export const SecaoTempAtual = () => {
  const { dados, erro } = useContext(ContextoDados);

  const pressaoFormatada = formatarPressao(dados.pressao);

  return (
    <SecaoEstilizada>
      {erro && <MensagemErro error={erro} />}
      <InputBusca />
      <TempAtualContainer>
        <Box>
          <Titulo>Agora</Titulo>
          <CelsiusContainer>
            <CelsiusInfo>{dados.temperatura}°</CelsiusInfo>
            <Icone
              src={dados.icone}
              alt="Imagem ilustrativa que se baseia na condição climatica"
            />
          </CelsiusContainer>
          <Cidade>{dados.cidade}</Cidade>
          <MinMax>
            Máxima: {dados.max}° - Mínima: {dados.min}°
          </MinMax>
        </Box>
        <Box>
          <Descricao>{dados.descricao}</Descricao>
          <SensacaoTermica>Sensação térmica: {dados.sensacao}°</SensacaoTermica>
        </Box>
      </TempAtualContainer>
      <TituloCondAtuais>Condições atuais</TituloCondAtuais>
      <CondAtualContainer>
        <Container>
          <TituloInfos>Vento</TituloInfos>
          <InfoContainer>
            <ValoresContainer>
              <Valores>{dados.velocidadeVento} Km/h</Valores>
            </ValoresContainer>
            <GraficoContainer>
              <FaWind color="white" size={36} />
            </GraficoContainer>
          </InfoContainer>
        </Container>
        <Container>
          <TituloInfos>Umidade</TituloInfos>
          <InfoContainer>
            <ValoresContainer>
              <Valores>{dados.umidade}%</Valores>
            </ValoresContainer>
            <GraficoContainer>
              <CircularProgress
                aria-label="Circulo de porcentagem que se baseia no valor da umidade"
                determinate
                value={dados.umidade}
                color="success"
                variant="plain"
                size="md"
                thickness={8}
              />
            </GraficoContainer>
          </InfoContainer>
        </Container>
        <Container style={{ gridColumn: "span 12" }}>
          <TituloInfos>Pressão</TituloInfos>
          <InfoContainer
            style={{ borderBottom: "2px solid grey", paddingBottom: 12 }}
          >
            <ValoresContainer>
              <Valores>{dados.pressao}</Valores>
            </ValoresContainer>
            <GraficoContainer style={{ width: "50%", marginLeft: 16 }}>
              <InfoProgesso>
                <SubtituloInfos>Baixo</SubtituloInfos>
                <SubtituloInfos>Alto</SubtituloInfos>
              </InfoProgesso>
              <LinearProgress
                aria-label="Barra de progresso baseada no valor da pressão atmosférica"
                determinate
                value={pressaoFormatada}
                variant="soft"
                thickness={16}
              />
            </GraficoContainer>
          </InfoContainer>
          <TituloInfos>Nascer e pôr do sol</TituloInfos>
          <InfoContainer>
            <ValoresContainer style={{ flex: 1 }}>
              <SubtituloInfos>Nascer do sol</SubtituloInfos>
              <Flex>
                <Valores>{dados.nascerSol}</Valores>
                <GiSunrise color="white" size={36} />
              </Flex>
              <SubtituloInfos>Pôr do sol</SubtituloInfos>
              <Flex>
                <Valores>{dados.porDoSol}</Valores>
                <GiSunset color="white" size={36} />
              </Flex>
            </ValoresContainer>
          </InfoContainer>
        </Container>
      </CondAtualContainer>
    </SecaoEstilizada>
  );
};
