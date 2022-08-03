import App from './App.svelte'

const target = document.body;
const root = target.attachShadow({ mode: 'open' });

const app = new App({
  target: root
})

console.error(root.styleSheets)
console.error(app.$$.root.innerHTML)

export default app
