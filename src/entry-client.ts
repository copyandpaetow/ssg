import { App } from "./pages";
import { render } from "../jsx/jsx-runtime";

const rootElement = document.getElementById("app") as HTMLElement;

render(App(), rootElement);
