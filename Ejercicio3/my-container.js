class MyContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <div>
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      `;
    }
  }
  
  customElements.define('contenedor-component', MyContainer);
  