class MyButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.message = this.getAttribute('message') || 'Default Message';
      this.shadowRoot.innerHTML = `
        <button>${this.message}</button>
      `;
      this.button = this.shadowRoot.querySelector('button');
      this.button.addEventListener('click', () => this.showMessage());
    }
  
    showMessage() {
      const messageElement = document.getElementById('message');
      if (messageElement) {
        messageElement.textContent = this.message;
      }
    }
  }
  
  customElements.define('my-button', MyButton);
  