import App from "./App.svelte";

import css from "./app.css"

const style = document.createElement('style')
style.innerHTML = css

const target = document.getElementById("app").attachShadow({mode: "open"})
target.appendChild(style)

const app = new App({
  target
});

export default app;
