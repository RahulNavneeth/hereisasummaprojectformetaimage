<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    export let data: { name: string; data: string } = { name: "", data: "" };
</script>

<div>DYNAMIC META IMAGE</div>

<MetaTags
    openGraph={{
        images: [
            {
                url: `http://localhost:5173/og?name=${data.name}&data=${data.data}`,
                alt: "DYNAMIC META IMAGE",
            },
        ],
    }}
/>
