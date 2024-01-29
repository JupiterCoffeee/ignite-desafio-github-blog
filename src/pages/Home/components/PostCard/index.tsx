import { formatDistanceToNow } from "date-fns";
import { PostCardContainer } from "./style";
import { ptBR } from "date-fns/locale/pt-BR";

interface PostCardProps {
    title: string;
    body: string;
    postedAt: string;
  }

export function PostCard({ title, body, postedAt } : PostCardProps) {
    return (
        <PostCardContainer>
            <header>
                <h4>{title}</h4>
                <span>{formatDistanceToNow(postedAt, {
                    addSuffix: true,
                    locale: ptBR
                })}</span>
            </header>
            <div>
                <p>
                    {body}
                </p>
            </div>
        </PostCardContainer>
    )
}