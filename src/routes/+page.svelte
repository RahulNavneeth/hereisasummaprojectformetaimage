<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    export let data: { URL: string };
</script>

<div>DYNAMIC META IMAGE</div>

<MetaTags
    openGraph={{
        images: [
            {
                url: data?.URL || "",
                width: 800,
                height: 600,
                alt: "DYNAMIC META IMAGE",
            },
        ],
    }}
/>
