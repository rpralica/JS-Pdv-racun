const inpOduzmipdvVrijednost = document.getElementById(
  'inpOduzmipdvVrijednost'
);
const inpDodajpdvVrijednost = document.getElementById('inpDodajpdvVrijednost');
const btnOduzmipdv = document.getElementById('btnOduzmipdv');
const btnDodajpdv = document.getElementById('btnDodajpdv');
const minusPdvPostotak = document.getElementById('minusPdvPostotak');
const plusPdvPostotak = document.getElementById('plusPdvPostotak');
const tdBezPdv = document.getElementById('tdBezPdv');
const tdIznosBezpdv = document.getElementById('tdIznosBezpdv');
const tdSaPdv = document.getElementById('tdSaPdv');
const tdIznosSaPdv = document.getElementById('tdIznosSaPdv');

function oduzmiPdv() {
  const pdv = inpOduzmipdvVrijednost.value / (1 + minusPdvPostotak.value / 100);
  tdBezPdv.textContent = pdv.toFixed(2);
  tdIznosBezpdv.textContent = (inpOduzmipdvVrijednost.value - pdv).toFixed(2);
}

btnOduzmipdv.addEventListener('click', oduzmiPdv);

function dodajPdv() {
  const pdv = inpDodajpdvVrijednost.value * (plusPdvPostotak.value / 100);
  tdIznosSaPdv.textContent = pdv.toFixed(2);
  tdSaPdv.textContent = +inpDodajpdvVrijednost.value + +pdv.toFixed(2);
}

btnDodajpdv.addEventListener('click', dodajPdv);
