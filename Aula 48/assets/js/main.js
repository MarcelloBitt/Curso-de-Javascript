const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemanaTexto(diaDaSemana) {
  const diaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return diaSemana[diaDaSemana];
}

function getMesTexto(numeroMes) {
  const mesAnoTexto = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return mesAnoTexto[numeroMes];
}

function zeroEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
  const diaDaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = getDiaSemanaTexto(diaDaSemana);
  const nomeMes = getMesTexto(numeroMes);

  return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()} ${data.getHours()}:${zeroEsquerda(
      data.getMinutes()
    )}`
  );
}

h1.innerHTML = criaData(data);
