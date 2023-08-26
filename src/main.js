import App from "./App";
import router from "./routes";

// root
const root = document.querySelector("#root");
root.append(new App().el);
