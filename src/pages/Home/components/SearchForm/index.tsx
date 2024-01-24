import * as z from "zod";
import { SearchFormContainer } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface SearchFormProps {
    issuesQuantity: number;
    fetchIssues: (username: string, repo: string, query?: string) => Promise<void>
}

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm({ issuesQuantity, fetchIssues } : SearchFormProps ) {
    const {
        register,
        handleSubmit
    } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    })
    

    async function handleSearchIssues(data: SearchFormInput) {
        if(data.query) {
            fetchIssues('JupiterCoffeee', 'ignite-desafio-github-blog', data.query);
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
    )
}