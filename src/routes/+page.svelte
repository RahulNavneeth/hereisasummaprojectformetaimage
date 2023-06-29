<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    export let data: { name: string; data: string } = { name: "", data: "" };
</script>

<div>DYNAMIC META IMAGE</div>

<MetaTags
    openGraph={{
        title: data.name,
        description: data.data,
        site_name: "discord",
        images: [
            {
                url: `https://hereisasummaprojectformetaimage.vercel.app/og?name=${
                    data.name
                }&data=${data.data.replaceAll(" ", "%20")}`,
                alt: "DYNAMIC META IMAGE",
                width: 1200,
                height: 630,
            },
        ],
    }}
/>
