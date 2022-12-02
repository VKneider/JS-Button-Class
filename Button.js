 class Button {
    constructor(style) {
      let newElement = document.createElement("div");
      this.main = newElement;
      this.main.innerHTML = `Clickeame - ${id}`;
      this.main.setAttribute("id", id.toString());
      if (style) {
        let keys = Object.keys(style);
        let values = Object.values(style);
  
        for (let i = 0; i < keys.length; i++) {
          this.main.style[keys[i]] = values[i];
        }
        this.main.classList.add("custom-btn");
      } else {
        this.main.classList.add("default");
        this.main.classList.add("btn");
      }
      id++;
  
      this.main.addEventListener("mouseup", () => {
        if(this.main.classList.contains("custom-btn")){this.main.style.display="none"} else {this.hide();}
        
      });
    }
  
    appendToBody() {
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

  var id=0;

  export{Button}