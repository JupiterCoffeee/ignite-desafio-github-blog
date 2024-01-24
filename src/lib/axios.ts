import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.github.com',
})

export const token = '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'