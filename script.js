function zeroFill(n) {
  return n < 9 ? `0${n}` : `${n}`;
}

function formatDate(date) {
  const d = zeroFill(date.getDate());
  const mo = zeroFill(date.getMonth() + 1);
  const y = zeroFill(date.getFullYear());
  const h = zeroFill(date.getHours());
  const mi = zeroFill(date.getMinutes());
  const s = zeroFill(date.getSeconds());

  return `${d}/${mo}/${y} ${h}:${mi}:${s}`;
}

function render(data) {
  const date = document.querySelector(".date");
  date.textContent = data;
}

// ISO 8601
// 18/10/2023 08:30:00
const stringDate = "2023-10-18T08:30:00-03:00";
const date = new Date(stringDate);

/* Criando sua própria classe de date
class MyDate extends Date {
  // Se possível checar de o (days) é um número ou string
  addDays(days) {
    this.setDate(this.getDate() + days);
  }
}
*/

/* Escrevendo uma função dentro do prototype de Date
Date.prototype.addDays = function (days) {
  return this.setDate(this.getDate() + days);
};
*/

/* Adicionando dias horas e minutos na data
date.setSeconds(date.getSeconds() + 3600);
date.setMinutes(date.getMinutes() + 1);
date.setHours(date.getHours() + 24);
date.setDate(date.getDate() + 30);
date.setMonth(date.getMonth() + 3);
date.setFullYear(date.getFullYear() + 10);
*/

/* Pegando a diferença entre duas datas
const start = new Date(stringDate);
const end = new Date("2023-12-18T08:30:00-03:00");
const result = end - start;
//                   ms       s     m    h    d
const time = result / 1000 / 60 / 60 / 24;
*/

render(formatDate(date));
