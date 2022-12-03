import {Button} from "./Button.js";

let addBTN = document.getElementById("addBtns");
addBTN.addEventListener("click", () => {
  
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

let x = new Button( 'btn-accept', 'myClass',
`  .myClass{
    background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    flex-shrink: 0;
    font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    font-size: 16px;
    font-weight: 500;
    height: 4rem;
    padding: 0 1.6rem;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
    transition: all .5s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  
  .myClass{
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: .1s;
  }
  
  @media (min-width: 768px) {
    .myClass{
      padding: 0 2.6rem;
    }
  }
`
);


let y = new Button('btn-deny', 'myClass2', `

.myClass2 {
  background: #e62143;
  border-radius: 11px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: Mija,-apple-system,BlinkMacSystemFont,Roboto,"Roboto Slab","Droid Serif","Segoe UI",system-ui,Arial,sans-serif;
  font-size: 1.15em;
  font-weight: 700;
  justify-content: center;
  line-height: 33.4929px;
  padding: .8em 1em;
  text-align: center;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  text-shadow: rgba(0, 0, 0, .3) 1px 1px 1px;
  text-underline-offset: 1px;
  transition: all .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  word-break: break-word;
  border: 0;
}

.myClass2:active,
.myClass2:focus {
  border-bottom-style: none;
  border-color: #dadada;
  box-shadow: rgba(0, 0, 0, .3) 0 3px 3px inset;
  outline: 0;
}

.myClass2:hover {
  border-bottom-style: none;
  border-color: #dadada;
}`)


let z= new Button("cool", "myClass3", `

.myClass3 {
  appearance: button;
  background-color: #000;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk,Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.myClass3:focus {
  text-decoration: none;
}

.myClass3:hover {
  text-decoration: none;
}

.myClass3:active {
  box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
  outline: 0;
}

.myClass3:not([disabled]):active {
  box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .myClass3 {
    padding: 12px 50px;
  }
}`)



let b1 = new Button("customIDDD", "myClass3")
x.appendToBody();
y.appendToBody();
z.appendToBody();
b1.appendToBody();