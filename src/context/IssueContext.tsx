import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface Issue {
    id: number;
    title: string;
    body: string;
    number: number;
    author: string;      // Adicionado autor fictício
    comments: number;    // Adicionado número fictício de comentários
    githubLink: string;  // Adicionado link fictício do GitHub
}

interface IssueContextType {
    issues: Issue[];
    fetchIssues: (username: string, repo: string, query?: string) => Promise<void>;
}

interface IssuesProviderProps {
    children: ReactNode;
}

export const IssuesContext = createContext({} as IssueContextType);

export function IssueProvider({ children }: IssuesProviderProps) {
    const [issues, setIssues] = useState<Issue[]>([]);

    const fetchIssues = async (username: string, repo: string, query?: string) => {
        try {
            let url = `search/issues?q=repo:${username}/${repo}`;

            if (query) {
                url += `%20${query}`;
            }

            const response = await api.get(url);
            const issuesData = response.data.items;
            const formattedIssues: Issue[] = issuesData.map((issue: any) => ({
                id: issue.id,
                title: issue.title,
                body: issue.body,
                number: issue.number,
                author: "Cameron Wll",          // Valor fictício de autor
                comments: Math.floor(Math.random() * 10),  // Número aleatório fictício de comentários
                githubLink: issue.html_url,    // Link real do GitHub
            }));

            setIssues(formattedIssues);
            console.log(url);
        } catch (error) {
            console.error('Erro ao buscar issues:', error.message);
        }
    };

    useEffect(() => {
        fetchIssues('JupiterCoffeee', 'ignite-desafio-github-blog');
    }, []);

    return (
        <IssuesContext.Provider value={{ issues, fetchIssues }}>
            {children}
        </IssuesContext.Provider>
    );
}
