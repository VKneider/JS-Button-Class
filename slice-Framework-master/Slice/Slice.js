

 export default class Slice {
     constructor () {
        this.classes = new Map();
        this.styles = document.createElement('style');
        this.styles.id="styles-slice"
        document.head.appendChild(this.styles);
        this.controller;
    }
        connectedCallback() {
            
        } 

        async getClass(module){
            let m = await import (module);
            return m.default();
        }

        getInstance(module){
            return new this.getClass(module)()
        }
}

customElements.define("my-slice", Slice);
window.slice= new Slice(); 



async function load(){
    //se puede mejorar utilizando reflection
    let x = await import("./controller/Controller.js");
    window.slice.controller = new x.default();
    /*
    Rutas
    await import ("./components/front/img-carousel/img-carousel.js");
    await import ("./components/front/SliderPro/SliderPro.js")
    await import("./components/front/Navbar/Navbar.js")
    */
}



load();




