import * as z from "zod";
import { SearchFormContainer } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { IssuesContext } from "../../../../context/IssueContext";

// Definir propriedades esperadas para o componente de formulário de pesquisa
interface SearchFormProps {
    issuesQuantity: number;
    fetchIssues: (username: string, repo: string, query?: string) => Promise<void>;
}

// Definir o esquema de validação usando o Zod
const searchFormSchema = z.object({
    query: z.string(),
});

// Inferir o tipo de entrada com base no esquema de validação
type SearchFormInput = z.infer<typeof searchFormSchema>;

// Definir o componente de formulário de pesquisa
export function SearchForm({ issuesQuantity, fetchIssues }: SearchFormProps) {
    const { username, repo } = useContext(IssuesContext);

    // Utilizar o useForm do react-hook-form e zodResolver para validação
    const {
        register,
        handleSubmit
    } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    });

    // Função para lidar com a submissão do formulário e chamar a função de busca
    async function handleSearchIssues(data: SearchFormInput) {
        if (data.query) {
            // Chamar a função de busca de publicações
            fetchIssues(username, repo, data.query);
        }
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
            <div>
                <h3>Publicações</h3>
                <span>{issuesQuantity} publicações</span>
            </div>
            <input 
                type="text" 
                placeholder="Buscar conteúdo"
                {...register('query')}
            />
        </SearchFormContainer>
    );
}
