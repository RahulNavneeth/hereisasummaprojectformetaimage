import axios from "axios"
import type { PageServerData } from "./$types"

export const load: PageServerData = async () => {
    const { data } = await axios.get("https://randomuser.me/api")
    return { URL: data.results[0].picture.large }
}
