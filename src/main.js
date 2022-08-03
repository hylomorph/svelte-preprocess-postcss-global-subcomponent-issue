import App from "./App.svelte";
// import './app.css'

const root = document.body.attachShadow({ mode: "open" });

const target_that_works = document.getElementById("app");

const app = new App({
  // target: target_that_works,
  target: root
});

export default app;
