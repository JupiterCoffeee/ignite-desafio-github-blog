import { useCallback, useContext, useEffect } from "react";
import { PostCard } from "./components/PostCard";
import { ProfileCard } from "./components/ProfileCard";
import { SearchForm } from "./components/SearchForm";
import { HomeCardsContainer, HomeContainer, HomeContent } from "./style";
import { FormattedIssue, Issue, IssuesContext } from "../../context/IssueContext";
import { Link } from "react-router-dom";
import { fetchData } from "../../hooks/useFetch";

export function Home() {
    const { issues, setIssues, username, repo } = useContext(IssuesContext);

    // Função assíncrona para buscar problemas com base no nome de usuário, repositório e consulta
    const fetchIssues = useCallback(async (username: string, repo: string, query?: string) => {
        try {
            // Construir URL para a busca de issues
            let url = `search/issues?q=repo:${username}/${repo}`;

            if (query) {
                url += `%20${query}`;
            }

            // Chamar função fetchData para buscar dados da API
            const response = await fetchData({url : `${url}`});
            const issuesData = response.data.items;

            // Formatar dados dos problemas e atualizar o estado
            const formattedIssues: Issue[] = issuesData.map((issue: FormattedIssue) => ({
                id: issue.id,
                title: issue.title,
                body: issue.body,
                number: issue.number,
                postedAt: issue.created_at, 
            }));

            setIssues(formattedIssues);
            console.log(url);
        } catch (error) {
            if (error instanceof Error) {
                console.error('Erro ao buscar problemas:', error.message);
            } else {
                console.error('Erro desconhecido ao buscar problemas:', error);
            }
        }
    }, [setIssues]);

    useEffect(() => {
        fetchIssues(username, repo);
    }, [fetchIssues, username, repo]);

    // Obter o comprimento da lista de problemas
    const issuesListLength = issues.length;

    return (
        <HomeContainer>
            <HomeContent>
                <ProfileCard />
                <SearchForm 
                    issuesQuantity={issuesListLength}
                    fetchIssues={fetchIssues}
                />
                <HomeCardsContainer>
                    {issues.map((issue, index) => (
                        <Link to={`/${issue.id.toString()}`} key={index} >
                            <PostCard
                                title={issue.title}
                                body={issue.body}
                                postedAt={issue.postedAt}
                            />
                        </Link>
                    ))}
                </HomeCardsContainer>
            </HomeContent>
        </HomeContainer>
    );
}
