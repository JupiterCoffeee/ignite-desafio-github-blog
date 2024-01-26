import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react";
import { PostContainer, PostHeader, PostSection } from "./style";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { api, token } from "../../lib/axios";
import { Issue, IssuesContext } from "../../context/IssueContext";

interface PostProps {
    issueNumber: number[];
}

export function Post({ issueNumber }: PostProps) {
    const { id } = useParams();
    const { issues } = useContext(IssuesContext);
    const [currentIssue, setCurrentIssue] = useState<Issue | null>(null);

    useEffect(() => {
        const foundIssue = issues.find((issue) => (issue.id).toString() === id);
        const issueNumber = foundIssue.number

        console.log(foundIssue?.number)
    
        if (foundIssue) {
            const fetchIssueDetails = async (username: string, repo: string, issue: number) => {
                try {
                    const response = await api.get(`repos/${username}/${repo}/issues/${issue}`, {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      });

                    const issueDetails: Issue = {
                        title: response.data.title,
                        body: response.data.body,
                        id: response.data.id,
                        number: response.data.number,
                        author: response.data.user.login,
                        comments: response.data.comments,
                        githubLink: response.data.html_url,
                    };
    
                    setCurrentIssue(issueDetails);
                } catch (error) {
                    console.error('Erro ao buscar detalhes da issue:', error.message);
                }
            };
    
            // Alterei a variável de 'issue' para 'foundIssue' abaixo
            fetchIssueDetails('JupiterCoffeee', 'ignite-desafio-github-blog', issueNumber);
        }
    }, [id, issues]);

    if (!currentIssue) {
        return <div>Carregando...</div>;
    }

    return (
        <PostContainer>
            <PostHeader>
                <div>
                    <Link to="/">
                        <CaretLeft />
                        VOLTAR
                    </Link>
                    <a href={currentIssue.githubLink} target="_blank" rel="noopener noreferrer">
                        VER NO GITHUB <ArrowSquareOut weight="bold"/>
                    </a>
                </div>
                <h2>{currentIssue.title}</h2>
                <div>
                    <span>
                        <GithubLogo weight="fill"/>
                        <p>{currentIssue.author}</p>
                    </span>
                    <span>
                        <Calendar weight="fill"/>
                        <p>Há 1 dia</p> {/* Substitua pelo valor real da data */}
                    </span>
                    <span>
                        <ChatCircle weight="fill"/>
                        <p>{currentIssue.comments} comentários</p> {/* Substitua pelo valor real dos comentários */}
                    </span>
                </div>
            </PostHeader>
            <PostSection>
                <p>{currentIssue.body}</p>
                {/* Adicione qualquer outra lógica ou renderização necessária aqui */}
            </PostSection>
        </PostContainer>
    );
}
