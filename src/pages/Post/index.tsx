import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react";
import { PostContainer, PostHeader, PostSection } from "./style";
import { Link, useParams } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import { Issue, IssuesContext } from "../../context/IssueContext";
import { ptBR } from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns";
import { fetchData } from "../../hooks/useFetch";

export function Post() {
    // Obter o parâmetro da URL referente ao ID do problema
    const { id } = useParams();
    // Obter dados do contexto, incluindo a lista de problemas, nome de usuário e repositório
    const { issues, username, repo } = useContext(IssuesContext);
    // Estado para armazenar detalhes do problema atual
    const [currentIssue, setCurrentIssue] = useState<Issue | null>(null);
  
    // Função assíncrona para buscar detalhes de um issue específico
    const fetchIssueDetails = useCallback(async () => {
      try {
        // Encontrar o problema na lista com base no ID fornecido
        const foundIssue = issues.find((issue) => issue.id.toString() === id);
        if (foundIssue) {
          // Chamar função fetchData para buscar dados da API
          const response = await fetchData({ url: `repos/${username}/${repo}/issues/${foundIssue.number}` });
  
          // Formatar dados do problema e atualizar o estado
          const issueDetails: Issue = {
            title: response.data.title,
            body: response.data.body,
            id: response.data.id,
            postedAt: response.data.created_at,
            number: response.data.number,
            author: response.data.user.login,
            comments: response.data.comments,
            githubLink: response.data.html_url,
          };
  
          setCurrentIssue(issueDetails);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error('Erro ao buscar detalhes do problema:', error.message);
        } else {
          console.error('Erro desconhecido ao buscar detalhes do problema:', error);
        }
      }
    }, [id, issues, username, repo]);
  
    // Efeito colateral para buscar detalhes do problema ao montar o componente
    useEffect(() => {
      fetchIssueDetails();
    }, [fetchIssueDetails]);
  
    // Se não houver detalhes do problema, exibir mensagem de carregamento
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
                        <p>
                            {formatDistanceToNow(currentIssue.postedAt, {
                                addSuffix: true,
                                locale: ptBR
                            })}
                        </p>
                    </span>
                    <span>
                        <ChatCircle weight="fill"/>
                        <p>{currentIssue.comments} comentários</p>
                    </span>
                </div>
            </PostHeader>
            <PostSection>
                <p>{currentIssue.body}</p>
            </PostSection>
        </PostContainer>
    );
}
