<script>
    import B from "./B.svelte";
</script>

<p class="bg-blue-500">Changing classes here works fine.</p>

<B />

<style lang="postcss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
