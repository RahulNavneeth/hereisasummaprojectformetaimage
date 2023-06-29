<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    export let data: { name: string; data: string } = { name: "", data: "" };
</script>

<div>DYNAMIC META IMAGE</div>

<MetaTags
    openGraph={{
        images: [
            {
                url: `https://hereisasummaprojectformetaimage.vercel.app/og?name=${
                    data.name
                }&data=${data.data.replaceAll(" ", "%20")}`,
                alt: "DYNAMIC META IMAGE",
                width: 800,
                height: 600,
            },
        ],
    }}
/>
