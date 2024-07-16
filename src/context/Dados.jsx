/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import formatarHoras from "../utils/FormatarHoras.js";

export const ContextoDados = createContext();

export const ContextoProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [dados, setDados] = useState("");
  const [erro, setErro] = useState(null);

  async function buscarDados(cidade) {
    const valorInput = cidade.trim();

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${valorInput}&units=metric&appid=${
      import.meta.env.VITE_API_KEY
    }&lang=pt_br`;

    const ICONE_URL = "http://openweathermap.org/img/wn/";

    return await axios
      .get(URL)
      .then((resposta) => {
        const horaNascerDoSol = formatarHoras(resposta.data.sys.sunrise);
        const horaPorDoSol = formatarHoras(resposta.data.sys.sunset);

        setDados({
          cidade: resposta.data.name,
          temperatura: parseInt(resposta.data.main.temp),
          descricao: resposta.data.weather[0].description,
          min: parseInt(resposta.data.main.temp_min),
          max: parseInt(resposta.data.main.temp_max),
          sensacao: parseInt(resposta.data.main.feels_like),
          icone: `${ICONE_URL}${resposta.data.weather[0].icon}.png`,
          umidade: parseInt(resposta.data.main.humidity),
          pressao: parseInt(resposta.data.main.pressure),
          velocidadeVento: parseFloat(resposta.data.wind.speed),
          nascerSol: horaNascerDoSol,
          porDoSol: horaPorDoSol,
        });
      })
      .catch((error) => {
        setErro(
          `${error.response.data.cod}: Erro ao buscar informações, tente novamente`
        );
      });
  }

  useEffect(() => {
    buscarDados("brasilia");
  }, []);

  useEffect(() => {
    if (erro !== null) {
      setTimeout(() => {
        setErro(null);
      }, 3000);
    }
  }, [erro]);

  const contexto = {
    input,
    setInput,
    dados,
    erro,
    buscarDados,
  };
  return (
    <ContextoDados.Provider value={contexto}>{children}</ContextoDados.Provider>
  );
};
