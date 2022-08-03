<script>
    import B from "./B.svelte";
    // this works
    // import "./app.css"
</script>

<p class="bg-blue-500">Changing classes here works fine. (And will even update those of subcomponents)</p>

<B />

<!-- this works -->
<!-- <style>
     @import "./app.css";
     </style> -->

<!-- this doesn't work -->
<!-- <style global src="./app.css"></style> -->

<!-- this doesn't work -->
<style global lang="postcss">
 @tailwind base;
 @tailwind components;
 @tailwind utilities;
</style>
