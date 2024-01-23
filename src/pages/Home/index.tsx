import { useEffect, useState } from "react";
import { Issue, PostCard } from "./components/PostCard";
import { ProfileCard } from "./components/ProfileCard";
import { SearchForm } from "./components/SearchForm";
import { HomeCardsContainer, HomeContainer, HomeContent } from "./style";
import { api } from "../../lib/axios";

export function Home() {

    const [issues, setIssues] = useState<Issue[]>([])

    useEffect(() => {
        const fetchIssues = async (username: string, repo: string) => {
            try {
                const response = await api.get(`search/issues?q=repo:${username}/${repo}`)
                const issuesData = response.data.items;
                const formattedIssues: Issue[] = issuesData.map((issue: any) => ({
                    title: issue.title,
                    body: issue.body,
                    id: issue.id
                }));

                setIssues(formattedIssues)
            } catch (error) {
                console.error('Erro ao buscar issues:', error.message)
            }
        }

        fetchIssues('JupiterCoffeee', 'ignite-desafio-github-blog')
        console.log(issues)
    }, [])

    return (
        <HomeContainer>
            <HomeContent>
                <ProfileCard />
                <SearchForm />
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