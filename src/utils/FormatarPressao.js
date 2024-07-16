const formatarPressao = (pressao) => {
  const pressaoMaxima = 1050;
  return (pressao / pressaoMaxima) * 100;
};

export default formatarPressao;
