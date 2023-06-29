import type { PageServerData } from "./$types"

export const load: PageServerData = async () => {
    const data = ["Albert", "Aswath", "Rahul", "Sriram", "Naveen", "Bharath"]
    return { name: data[Math.floor(Math.random() * data.length)], data: "Lorem ipsum dolor sit amet" }
}
