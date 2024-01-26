import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.github.com',
})

export const token = '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'