import { Component } from "./core/heropy.js";

export class App extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `
    <input />
    <button>Click!<button/>
    `;
  }
}
