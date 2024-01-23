import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.github.com',
})

export const token = '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'