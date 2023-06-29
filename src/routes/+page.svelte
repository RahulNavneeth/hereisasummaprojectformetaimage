<script lang="ts">
    export let data: { URL: string };
</script>

<svelte:head>
    <title>DYNAMIC META IMAGE</title>
    <meta property="og:image" content={data.URL} />
</svelte:head>

<div>DYNAMIC META IMAGE</div>
