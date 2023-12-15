class ExternalDataComponent extends HTMLElement {
  constructor() {
    super();
    this.userList = ["usuario1", "usuario2", "usuario3"];
    this.currentIndex = 0;
  }

  connectedCallback() {
    this.displayUserList();
    setInterval(() => this.displayNextUser(), 5000);
  }

  displayUserList() {
    const userListHTML = this.userList.map(user => `<li>${user}</li>`).join('');
    this.innerHTML = `<ul>${userListHTML}</ul>`;
  }

  displayNextUser() {
    this.currentIndex = (this.currentIndex + 1) % this.userList.length;
    this.displayUserList();
  }
}

customElements.define('external-data-component', ExternalDataComponent);