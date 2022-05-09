var sim = 0;
var nao = 0;

function Funcsim() {
sim = sim + 1;
  document.getElementById("sim").innerHTML = sim;
  document.getElementById("sim").style.width = sim + "1px";
}
function Funcnao() {
  nao = nao + 1;
  document.getElementById("nao").innerHTML = nao;
  document.getElementById("nao").style.width = nao + "1px";
}