let terza = document.querySelector("#terza");
let felices = document.querySelector("#felices");

function cambiarColor() {
  terza.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function cambiarColor2() {
  felices.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}
window.setInterval(cambiarColor, 100)
window.setInterval(cambiarColor2, 100)
window.setInterval(mover1, 100)

// setInterval> ejecuta una función cada cierto tiempo. El tiempo se debe escribir en milisegundos
let x = 0;
let dX = 10;
let y = 0;
let dy = 10;
let angle = 0;
let dAngle = 45;
function mover() {
  x = x + dX;
  y = y + dy;
  angle = angle + dAngle;
  terza.style.transform = `translate(${x}px,${y}px) rotate(${angle}deg)`;
}
let x2 = 50;
let dx2 = 10;
let vX = 10;
let t = 0.3;
let y2 = 400;
let dy2= 10;
let vY = -7;
let a = 3;
let dAngle2 = 45;
function mover1() {
  t += 0.1;
  x2 = 0 + vX*t;
  y2 = 400 + vY * t + (a * Math.pow(t, 2)) / 2;
  angle = angle + dAngle2;
  felices.style.transform = `translate(${x2}px,${y2}px) rotate(${angle}deg)`;
}
let idMovimiento;
let idColor;
let corriendo = false;
function start() {
  corriendo = true;
  idMovimiento = window.setInterval(mover, 100);
  idColor = window.setInterval(cambiarColor, 30);
  idMovimiento1 = window.setInterval(mover1, 100);
}
function stop() {
  corriendo = false;
  window.clearInterval(idMovimiento);
  window.clearInterval(idColor);
  window.clearInterval(idMovimiento1);
}
window.onkeydown = function (evento) {
  if (evento.key == "w") {
    if (corriendo) stop();
    else start();
  }
};
