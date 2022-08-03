<script>
    import B from "./B.svelte";
    // import "./app.css"
</script>

<p class="bg-blue-900">Changing classes here works fine.</p>

<B />

<!-- <style global src="./app.css"></style> -->

<style global lang="postcss">
 @tailwind base;
 @tailwind components;
 @tailwind utilities;
</style>
