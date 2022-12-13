(function () {
  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  function startClock() {
    timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }

  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString("pt-br", { hour12: false, timeZone: "GMT" });
  }

  document.addEventListener("click", function (e) {
    const element = e.target;

    if (element.classList.contains("iniciar")) {
      clearInterval(timer);
      startClock();
      relogio.classList.remove("pausado");
    }

    if (element.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }

    if (element.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      segundos = 0;
      relogio.classList.remove("pausado");
    }
  });
})();
