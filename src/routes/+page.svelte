<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    import { meta } from "../store";
    export let data: { URL: string };
    $: meta.set({ URL: "DYNAMIC META IMAGE" });
</script>

<div>DYNAMIC META IMAGE</div>

<MetaTags
    openGraph={{
        images: [
            {
                url: $meta.URL,
                width: 800,
                height: 600,
                alt: "DYNAMIC META IMAGE",
            },
        ],
    }}
/>
