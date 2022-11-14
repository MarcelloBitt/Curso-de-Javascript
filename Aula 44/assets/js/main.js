(() => {
  const form = document.getElementById("formulario");
  const abaixoPeso = document.getElementById("abaixoPeso");
  const normal = document.getElementById("normal");
  const sobrepeso = document.getElementById("sobrepeso");
  const obeso1 = document.getElementById("obeso1");
  const obeso2 = document.getElementById("obeso2");
  const obeso3 = document.getElementById("obeso3");
  const btn = document.getElementById("btnClear");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso) {
      setResultado("Peso Inválido", false);
      return;
    }

    if (!altura) {
      setResultado("Altura Inválida", false);
      return;
    }

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelIMC})`;

    setResultado(msg, true);
  });

  btn.addEventListener("click", limpaFaixa);

  function getNivelImc(imc) {
    const nivel = [
      "Abaixo do peso",
      "Peso normal",
      "Sobrepeso",
      "Obesidade grau 1",
      "Obesidade grau 2",
      "Obesidade grau 3",
    ];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
  }

  function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    if (imc < 18.5) {
      abaixoPeso.classList.add("peso-perigo");
    }
    if (imc >= 18.5 && imc <= 24.9) {
      normal.classList.add("peso-ok");
    }
    if (imc >= 25 && imc <= 29.9) {
      sobrepeso.classList.add("peso-perigo");
    }
    if (imc >= 30 && imc <= 34.9) {
      obeso1.classList.add("peso-orange");
    }
    if (imc >= 35 && imc <= 39.9) {
      obeso2.classList.add("peso-orange");
    }
    if (imc > 40) {
      obeso3.classList.add("peso-red");
    }
    return imc.toFixed(2);
  }

  function criaP() {
    const p = document.createElement("p");
    return p;
  }

  function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    const p = criaP();

    if (isValid) {
      p.classList.add("paragrafo-resultado");
    } else {
      p.classList.add("bad");
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
  }

  function limpaFaixa() {
    abaixoPeso.classList.remove("peso-perigo");
    normal.classList.remove("peso-ok");
    sobrepeso.classList.remove("peso-perigo");
    obeso1.classList.remove("peso-orange");
    obeso2.classList.remove("peso-orange");
    obeso3.classList.remove("peso-red");

    const peso = document.querySelector("#peso");
    peso.value = "";
    const altura = document.querySelector("#altura");
    altura.value = "";
    const paragrafo = document.querySelector("p");
    const res = document.querySelector("#resultado");
    res.removeChild(paragrafo);
  }
})();
