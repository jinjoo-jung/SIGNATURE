// export default class App {
//   constructor() {
//     this.el = document.createElement("div");
//     this.el.textContent = "Hello, world!";
//   }
// }

import { Component } from "./core/heropy";

export default class App extends Component {
  render() {
    this.el.textContent = "Hello, world!";
  }
}
