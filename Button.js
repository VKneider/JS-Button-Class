class Button {
  constructor(customID,customClass, styles) {
    let newElement = document.createElement("div");
    this.main = newElement;
    this.main.innerHTML = `Clickeame`;

    
    
    if(customID){
      this.main.setAttribute("id", customID)
    } else {this.main.setAttribute("id", id.toString());id++; }

    if(customClass){
      this.customClass=customClass;
    }

    this.main.classList.add("btn");
    

    if (styles && customClass) {

      let style = document.createElement("style");
      style.innerHTML=`${styles}`;
      this.styles = style;
    }


    this.main.addEventListener("mouseup", () => {
      if (this.main.classList.contains("custom-btn")) {
        this.main.style.display = "none";
      } else {
        this.hide();
      }
    });
  }

  appendToBody() {
    
    if (verify == false) {
      verify = true;
      let link = document.createElement("link");
      link.rel="stylesheet";
      link.href="./default.css"
      document.head.appendChild(link);
    }
    
    if (this.styles) {
      document.head.appendChild(this.styles);
    }
    this.main.classList.add("default");
    if(this.customClass){this.main.classList.add(this.customClass)}
    document.body.appendChild(this.main);
    
  }
  
  show() {
    this.main.classList.remove("hidden");
    this.main.classList.add("default");
  }

  hide() {
    this.main.classList.remove("default");
    this.main.classList.add("hidden");
  }
}

var id = 0;
var verify = false;

export { Button, verify };
