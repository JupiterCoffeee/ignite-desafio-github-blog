
import { useContext } from "react";
import { PostCard } from "./components/PostCard";
import { ProfileCard } from "./components/ProfileCard";
import { SearchForm } from "./components/SearchForm";
import { HomeCardsContainer, HomeContainer, HomeContent } from "./style";
import { IssuesContext } from "../../context/IssueContext";
import { Link } from "react-router-dom";

export function Home() {
    const { issues, fetchIssues } = useContext(IssuesContext)
    
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
                    {issues.map((issue, index) => {
                        return (
                            <Link to={`/${issue.id.toString()}`} key={index} >
                                <PostCard
                                    title={issue.title}
                                    body={issue.body}
                                />
                            </Link>
                        )
                    })}
                </HomeCardsContainer>
            </HomeContent>
        </HomeContainer>
    )
}