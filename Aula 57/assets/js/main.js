const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const bgColor = estilosBody.backgroundColor;

for (let p of ps) {
  p.style.background = bgColor;
  p.style.color = "white";
}
