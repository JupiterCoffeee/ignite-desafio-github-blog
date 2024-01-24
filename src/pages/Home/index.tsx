import { useEffect, useState } from "react";
import { Issue, PostCard } from "./components/PostCard";
import { ProfileCard } from "./components/ProfileCard";
import { SearchForm } from "./components/SearchForm";
import { HomeCardsContainer, HomeContainer, HomeContent } from "./style";
import { api } from "../../lib/axios";

export function Home() {

    const [issues, setIssues] = useState<Issue[]>([])
    
    const fetchIssues = async (username: string, repo: string, query?: string) => {
        try {
            let url = `search/issues?q=repo:${username}/${repo}`;

            if (query) {
                url += `%20${query}`;
            }

            const response = await api.get(url)
            const issuesData = response.data.items;
            const formattedIssues: Issue[] = issuesData.map((issue: any) => ({
                title: issue.title,
                body: issue.body,
                id: issue.id
            }));

            setIssues(formattedIssues)
            console.log(url)
        } catch (error) {
            console.error('Erro ao buscar issues:', error.message)
        }
    }

    useEffect(() => {
        fetchIssues('JupiterCoffeee', 'ignite-desafio-github-blog')
    }, [])

    const issuesListLength = issues.length

    return (
        <HomeContainer>
            <HomeContent>
                <ProfileCard />
                <SearchForm 
                    issuesQuantity={issuesListLength}
                    fetchIssues={fetchIssues}
                />
                <HomeCardsContainer>
                    {issues.map(issue => {
                        return (
                            <PostCard
                                key={issue.id} 
                                title={issue.title}
                                body={issue.body}
                            />
                        )
                    })}
                </HomeCardsContainer>
            </HomeContent>
        </HomeContainer>
    )
}