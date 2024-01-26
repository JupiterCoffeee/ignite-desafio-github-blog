import { PostCardContainer } from "./style";

interface Issue {
    title: string;
    body: string;
  }

export function PostCard({ title, body } : Issue) {
    return (
        <PostCardContainer>
            <header>
                <h4>{title}</h4>
                <span>Há 1 dia</span>
            </header>
            <div>
                <p>
                    {body}
                </p>
            </div>
        </PostCardContainer>
    )
}