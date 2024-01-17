import { SearchFormContainer } from "./style";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <div>
                <h3>Publicações</h3>
                <span>6 publicações</span>
            </div>
            <input type="text" placeholder="Buscar conteúdo" />
        </SearchFormContainer>
    )
}