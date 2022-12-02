import {Button} from "./Button.js";
var verify=false;

let addBTN = document.getElementById("addBtns");
addBTN.addEventListener("click", () => {
  if (verify == false) {
    verify = true;
    let estilo = document.createElement("div");
    estilo.innerHTML = `<link rel="stylesheet" href="./default.css">`;
    document.body.appendChild(estilo);
  }

  let newBtn = new Button();
  newBtn.appendToBody();
});

let showBTN = document.getElementById("showBtns");
showBTN.addEventListener("click", showBtns);
function showBtns() {
  let botones = document.getElementsByClassName("btn");
  let botonesCustom = document.getElementsByClassName("custom-btn");
  for (let i = 0; i < botones.length; i++) {
    botones[i].classList.remove("hidden");
    botones[i].classList.add("default");
    
  }

  for(let i=0; i<botonesCustom.length;i++){
    botonesCustom[i].style.display="inline-flex";
  }
}

let hideBTN = document.getElementById("hideBtns");
hideBTN.addEventListener("click", hideBtns);

function hideBtns() {
  let botones = document.getElementsByClassName("btn");
  let botonesCustom = document.getElementsByClassName("custom-btn");
  for (let i = 0; i < botones.length; i++) {
    botones[i].classList.remove("default");
    botones[i].classList.add("hidden");
  }

  for(let i=0; i<botonesCustom.length;i++){
    botonesCustom[i].style.display="none";
  }
}

let x = new Button({
  "align-items": 'center',
  'background-color': '#0A66C2',
  'border': 0,
  'border-radius': '100px',
  'box-sizing': 'border-box',
  'color': '#ffffff',
  'cursor': 'pointer',
  'display': 'inline-flex',
  'font-size': '16px',
  'font-weight': 600,
  'justify-content': 'center',
  'line-height': '20px',
  'max-width': '480px',
  'min-height': '40px',
  'min-width': '0px',
  'overflow': 'hidden',
  'padding': '0px',
  'padding-left': '20px',
  'padding-right': '20px',
  'text-align': 'center',
}
);
x.appendToBody();



