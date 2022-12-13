// escrever uma função que recebe dois números e retorna o maior deles

const maxNumero = (num1, num2) => (num1 > num2 ? num1 : num2);

console.log(maxNumero(100, 50));
// _______________________________________________________________________________________________________

// escrever uma função que recebe dois argumentos e retorna true se a imagem estiver no modo paisagem

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1980, 720));

// _______________________________________________________________________________________________________

// escrever uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é diviísel por 5 e 3 = Retorna o próprio número
// Checar se o número é número
// Use a função com número de 0 a 100

const fizz = "Fizz";
const buzz = "Buzz";

function fizzBuzz(numero) {
  if (typeof numero !== "number") return "Opa o dado deve ser um número!";
  if (numero % 3 === 0 && numero % 5 === 0) return fizz + buzz;
  if (numero % 3 === 0) return fizz;
  if (numero % 5 === 0) return buzz;
  return numero;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
