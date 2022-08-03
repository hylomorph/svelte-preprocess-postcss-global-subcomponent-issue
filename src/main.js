import App from "./App.svelte";

const target = document.body;
const root = target.attachShadow({ mode: "open" });

const app = new App({
  target: root,
});

export default app;
