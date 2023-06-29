<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
</script>

<div>DYNAMIC META IMAGE</div>

<MetaTags
    openGraph={{
        images: [
            {
                url: "https://hereisasummaprojectformetaimage.vercel.app/og",
                width: 800,
                height: 600,
                alt: "DYNAMIC META IMAGE",
            },
        ],
    }}
/>
