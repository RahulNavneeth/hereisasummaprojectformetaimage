<script lang="ts">
    export let data: { name: string; data: string } = { name: "", data: "" };
</script>

<svelte:head>
    <meta title={data.name} />
    <meta name="description" content={data.data} />
    <meta
        property="og:image"
        content={`https://hereisasummaprojectformetaimage.vercel.app/og?${
            data.name
        }&data=${data.data.replaceAll(" ", "%20")}`}
    />
</svelte:head>

<div style="font-size: 100px;">{data.name}</div>
