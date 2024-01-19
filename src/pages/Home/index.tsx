import { PostCard } from "./components/PostCard";
import { ProfileCard } from "./components/ProfileCard";
import { SearchForm } from "./components/SearchForm";
import { HomeCardsContainer, HomeContainer, HomeContent } from "./style";

export function Home() {
    return (
        <HomeContainer>
            <HomeContent>
                <ProfileCard />
                <SearchForm />
                <HomeCardsContainer>
                    <PostCard />
                    <PostCard />
                </HomeCardsContainer>
            </HomeContent>
        </HomeContainer>
    )
}