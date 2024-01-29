import { api, token } from "../lib/axios";

interface FetchProps {
    url: string;
}

/**
 * Função assíncrona para realizar uma requisição de dados.
 * @param {FetchProps} params - Objeto contendo a URL da requisição.
 * @returns {Promise<any>} - Uma Promise que resolve com a resposta da requisição.
 */

export async function fetchData({ url }: FetchProps) {
    try {
        const response = await api.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Erro na requisição para ${url}:`, error.message);
        } else {
            console.error(`Erro desconhecido na requisição para ${url}`);
        }
        throw error;
    }
}
