const formatarHoras = (data) => {
  const dataFormatado = new Date(data * 1000);

  const horas = dataFormatado.getHours().toString().padStart(2, "0");
  const minutos = dataFormatado.getMinutes().toString().padStart(2, "0");
  return `${horas}:${minutos}`;
};

export default formatarHoras;
