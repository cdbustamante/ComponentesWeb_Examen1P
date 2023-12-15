class CounterComponent extends HTMLElement {
    constructor() {
      super();
      this._counter = parseInt(localStorage.getItem('counter')) || 0;
    }
  
    connectedCallback() {
      this.render();
      this.attachListeners();
    }
  
    render() {
      this.innerHTML = `
        <p> ${this._counter}</p>
        <button id="suma">&#43;</button>
        <button id="resta">&#8722;</button>
        <button id="restaurar">restaurar</button>
      `;
    }
  
    attachListeners() {
      const sumabt = this.querySelector('#suma');
      const restabt = this.querySelector('#resta');
      const nuevobt = this.querySelector('#restaurar');
  
      sumabt.addEventListener('click', () => {
        this._counter++;
        this.guardar();
       
      });
  
      restabt.addEventListener('click', () => {
        this._counter--;
        this.guardar();
       
      });

      nuevobt.addEventListener('click', () => {
        this._counter = 0;
        this.guardar();
      });
    }
  
    guardar() {
      localStorage.setItem('counter', this._counter);
      location.reload();
    }
  
  }
  
  customElements.define('counter-component', CounterComponent);
  