import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./styles/layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { IssueProvider } from "./context/IssueContext";

export function Router() {
    return (
        <IssueProvider>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route 
                        path=":id" 
                        element={<Post /> }/>
                </Route>
            </Routes>
        </IssueProvider>
    );
    
}
