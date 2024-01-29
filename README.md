# Blog Pessoal com ReactJS e API do GitHub

Bem-vindo ao meu Blog Pessoal desenvolvido com ReactJS e integrado à API do GitHub. Esta aplicação permite listar e filtrar as issues de um repositório específico, além de exibir detalhes do perfil do usuário.

## Funcionalidades

- **Listagem do Perfil:**
  - Exibe informações do perfil do usuário, como imagem, número de seguidores, nome, etc.

- **Listagem de Issues:**
  - Apresenta todas as issues do repositório com um resumo do conteúdo.

- **Detalhes da Issue:**
  - Permite visualizar o conteúdo completo de uma issue em uma página dedicada.

## Tecnologias Utilizadas

- ReactJS
- React Router DOM
- Axios para consumir a API do GitHub
- Outras bibliotecas e ferramentas comuns em projetos React

## Como Usar

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/JupiterCoffeee/ignite-desafio-github-blog.git
   cd ignite-desafio-github-blog
   npm install

2. **Configure a API do GitHub:**

- Renomeie o arquivo .env.example para .env.
- Adicione sua chave de acesso à API do GitHub ao arquivo .env.

3. **Substitua o Placeholder pelo Seu Token Pessoal:**
- Abra o arquivo src/lib/axios.ts.
- Substitua <SEU_TOKEN> pelo seu token pessoal do GitHub.

4. **Insira Seu Próprio Usuário e Repositório no Context:**
- Abra o arquivo src/context/IssueContext.tsx.
- Substitua SEU_USUARIO pelo seu nome de usuário do GitHub.
- Substitua SEU_REPO pelo nome do seu repositório.

5. **Execute a Aplicação:**
```bash
npm run dev