# Movie Search

Aplicação web para buscar filmes usando a API do OMDb. Projeto desenvolvido em TypeScript puro, sem frameworks ou bibliotecas externas.

## Sobre o Projeto

Este é um buscador de filmes minimalista que consome a API pública do OMDb (Open Movie Database). O usuário digita o nome de um filme e recebe uma lista de resultados correspondentes.

## Tecnologias Utilizadas

- HTML5
- CSS3
- TypeScript
- OMDb API

## Estrutura do Projeto

```
movie-search-ts/
├── index.html
├── style.css
├── tsconfig.json
├── src/
│   └── main.ts
└── dist/
    └── main.js
```

## Funcionalidades

- Busca de filmes em tempo real
- Interface responsiva com tema escuro
- Feedback visual de carregamento
- Tratamento de erros
- Design minimalista

## Como Executar

### Opção 1: Abrir diretamente no navegador

1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` no navegador

### Opção 2: Usar um servidor local

```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve .

# Com Live Server (VS Code)
Clique com botão direito em index.html > Open with Live Server
```

Acesse `http://localhost:8000` (ou a porta indicada)

## Como Usar

1. Digite o nome de um filme no campo de busca
2. Pressione Enter
3. Os resultados aparecerão na lista abaixo

## Compilação do TypeScript

Se você modificar o arquivo `main.ts`, será necessário recompilar:

```bash
tsc
```

O arquivo `main.js` será gerado automaticamente na pasta `dist/`.

## API Utilizada

O projeto utiliza a OMDb API (Open Movie Database):
- URL base: `https://www.omdbapi.com/`
- Documentação: https://www.omdbapi.com/

### Obter sua própria API Key

1. Acesse https://www.omdbapi.com/apikey.aspx
2. Selecione o plano FREE (1000 requisições/dia)
3. Confirme seu email
4. Substitua a key no arquivo `src/main.ts`

## Configuração do TypeScript

O projeto usa as seguintes configurações:

- Target: ES2017
- Module: ES2020
- Strict mode ativado
- Lib: ES2015 + DOM

## Melhorias Futuras

- Exibir pôster dos filmes
- Mostrar mais detalhes ao clicar
- Implementar debounce na busca
- Adicionar paginação de resultados
- Salvar histórico de buscas
- Modo claro/escuro

## Licença

Projeto de código aberto para fins educacionais.

## Autor

Desenvolvido como projeto de estudo de TypeScript e consumo de APIs.