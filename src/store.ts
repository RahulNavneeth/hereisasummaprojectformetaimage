import { writable } from "svelte/store";

export const meta = writable<{ URL: string }>({ URL: "" })
