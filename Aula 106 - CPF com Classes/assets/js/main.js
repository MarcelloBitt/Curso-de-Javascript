// 705.484.450-52
// 070.987.720-03

class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: false,
      enumerable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  isSequence() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCPF() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : 0;
  }

  valida() {
    if (
      !this.cpfLimpo ||
      typeof this.cpfLimpo !== "string" ||
      this.cpfLimpo.length !== 11 ||
      this.isSequence()
    )
      return false;
    this.geraNovoCPF();

    return this.novoCPF === this.cpfLimpo;
  }
}

const validaCPF = new ValidaCPF("705.484.450-52");

validaCPF.valida() ? console.log("Válido") : console.log("Inválido");
