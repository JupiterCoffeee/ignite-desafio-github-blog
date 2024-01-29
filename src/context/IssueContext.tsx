import { createContext, useState, ReactNode } from "react";

// Definição da interface para cada issue
export interface Issue {
  id: number;
  title: string;
  body: string;
  number: number;
  postedAt: string;
  author: string;
  comments: number;
  githubLink: string;
}

// Definição da interface para os dados formatados de uma issue
export interface FormattedIssue {
  id: number;
  title: string;
  body: string;
  number: number;
  created_at: string;
}

// Definição do tipo para o contexto das issues
interface IssueContextType {
  issues: Issue[];
  setIssues: React.Dispatch<React.SetStateAction<Issue[]>>;
  username: string;
  repo: string;
}

// Propriedades esperadas para o componente IssueProvider
interface IssuesProviderProps {
  children: ReactNode;
}

// Contexto e provedor para gerenciar o estado das issues
export const IssuesContext = createContext({} as IssueContextType);

export function IssueProvider({ children }: IssuesProviderProps) {
  // Estado para armazenar as issues
  const [issues, setIssues] = useState<Issue[]>([]);

  // Informações fixas do username e repo
  const username = 'YOUR_NAME';
  const repo = 'YOUR_REPOSITORY';

  return (
    <IssuesContext.Provider value={{ issues, setIssues, username, repo }}>
      {children}
    </IssuesContext.Provider>
  );
}
