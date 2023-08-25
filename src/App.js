import { Component } from "./core/heropy.js";
import TheHeader from "./components/TheHeader.js";

export default class App extends Component {
  render() {
    this.el.append(new TheHeader().el);
  }
}
