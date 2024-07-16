import styled from "styled-components";
import { SecaoTempAtual } from "./componentes/SecaoTempAtual";
import { ContextoProvider } from "./context/Dados";
import bg from "../public/clouds.jpg";

const AppContainer = styled.main`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function App() {
  return (
    <AppContainer>
      <ContextoProvider>
        <SecaoTempAtual />
      </ContextoProvider>
    </AppContainer>
  );
}

export default App;