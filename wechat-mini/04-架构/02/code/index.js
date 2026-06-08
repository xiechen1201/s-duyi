/* class CutomElement extends HTMLElement {
    constructor() {
        super();

        const box = document.createElement("div");
        box.className = "custom-style";

        const text = document.createElement("p");
        text.innerHTML = "Hello, I am a custom element!"

        box.appendChild(text);
        this.appendChild(box);
    }
}

window.customElements.define("custom-element", CutomElement); */

// ============

class CutomElement extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById("customTempId");
        template.contentEditable.clone(true);
    }
}

window.customElements.define("custom-element", CutomElement);
