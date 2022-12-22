function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear(el);
      if (el.classList.contains("btn-del")) this.del(el);
      if (el.classList.contains("btn-eq")) this.realizaConta(el);
    });
  };

  this.capturaEnter = () => {
    this.display.addEventListener("keypress", (e) => {
      if (e.key !== "Enter") return;
      this.realizaConta();
    });
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };
  this.clear = () => (this.display.value = "");
  this.del = () => (this.display.value = this.display.value.slice(0, -1));
  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);
      this.display.value = conta;
    } catch (error) {
      alert("Conta inválida");
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
