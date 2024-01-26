import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./styles/layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { IssueProvider, IssuesContext } from "./context/IssueContext";
import { useContext } from "react";

export function Router() {
    const { issues } = useContext(IssuesContext)
    const issueRoutes = (issues && issues.map(issue => {
        return issue.number
    }))
    console.log(issueRoutes)

    return (
        <IssueProvider>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route 
                        path=":id" 
                        element={
                        <Post 
                            issueNumber={
                                issueRoutes
                            }/>
                    }
                    />
                </Route>
            </Routes>
        </IssueProvider>
    );
}
