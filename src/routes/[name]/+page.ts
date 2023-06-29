import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ params }) => {
    return { name: params.name.toUpperCase(), data: "Lorem ipsum dolor sit amet" }
}
