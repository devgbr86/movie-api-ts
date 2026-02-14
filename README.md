# Movie Search - Versão Aprimorada

Aplicação web para buscar filmes e visualizar informações detalhadas usando a API do OMDb. Projeto desenvolvido em TypeScript puro, sem frameworks ou bibliotecas externas.

## 🎯 Sobre o Projeto

Este é um buscador de filmes minimalista que consome a API pública do OMDb (Open Movie Database). O usuário digita o nome de um filme, recebe uma lista de resultados e pode clicar em qualquer filme para ver informações detalhadas.

## ✨ Novidades da Versão Aprimorada

### Funcionalidades Adicionadas

- **Detalhes Completos do Filme**: Ao clicar em um filme da lista, você vê:
  - Sinopse completa
  - Gênero
  - Diretor e roteirista
  - Elenco principal
  - Prêmios conquistados
  - Avaliações (IMDb, Rotten Tomatoes, Metacritic)
  - Bilheteria
  - Idioma e país de origem
  - Duração e classificação etária

- **Interface em Duas Colunas**:
  - Coluna esquerda: Lista de resultados da busca
  - Coluna direita: Detalhes do filme selecionado (sticky)

- **Visual Aprimorado**:
  - Destaque visual do filme selecionado
  - Área de detalhes com scroll independente
  - Botão para fechar os detalhes
  - Layout responsivo (adapta para uma coluna em telas menores)

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- TypeScript
- OMDb API (API gratuita sem necessidade de imagens)

## 📁 Estrutura do Projeto

```
movie-search-ts/
├── index.html          # HTML com área de detalhes
├── style.css           # CSS aprimorado com grid layout
├── tsconfig.json       # Configuração do TypeScript
├── src/
│   └── main.ts        # TypeScript com busca de detalhes
└── dist/
    └── main.js        # JavaScript compilado
```

## 🚀 Como Executar

### Opção 1: Abrir diretamente no navegador

1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` no navegador

### Opção 2: Usar um servidor local (recomendado)

```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve .

# Com Live Server (VS Code)
Clique com botão direito em index.html > Open with Live Server
```

Acesse `http://localhost:8000` (ou a porta indicada)

## 📖 Como Usar

1. Digite o nome de um filme no campo de busca
2. Pressione **Enter**
3. Os resultados aparecerão na lista à esquerda
4. **Clique em qualquer filme** para ver os detalhes completos à direita
5. Use o botão **✕** para fechar os detalhes
6. Faça uma nova busca a qualquer momento

## 🔧 Compilação do TypeScript

Se você modificar o arquivo `src/main.ts`, será necessário recompilar:

```bash
tsc
```

O arquivo `main.js` será gerado automaticamente na pasta `dist/`.

## 🌐 API Utilizada

O projeto utiliza a OMDb API (Open Movie Database) - 100% gratuita:
- URL base: `https://www.omdbapi.com/`
- Documentação: https://www.omdbapi.com/

### Obter sua própria API Key

1. Acesse https://www.omdbapi.com/apikey.aspx
2. Selecione o plano **FREE** (1000 requisições/dia)
3. Confirme seu email
4. Substitua a key `trilogy` no arquivo `src/main.ts`

**Nota**: A key `trilogy` é pública e compartilhada, pode ter limite de uso. Para uso contínuo, recomenda-se criar sua própria key gratuita.

## 📊 Informações Exibidas

### Resultados da Busca
- Título do filme
- Ano de lançamento

### Detalhes do Filme
- **Informações Básicas**: Título, ano, duração, classificação
- **Sinopse**: Descrição completa do enredo
- **Equipe Criativa**: Diretor, roteirista
- **Elenco**: Atores principais
- **Gênero**: Categorias do filme
- **Prêmios**: Conquistas e indicações
- **Avaliações**: Notas do IMDb, Rotten Tomatoes e Metacritic
- **Bilheteria**: Arrecadação em dólares
- **Dados Técnicos**: Idioma, país de origem

## ⚙️ Configuração do TypeScript

O projeto usa as seguintes configurações:

- Target: ES2017
- Module: ES2020
- Strict mode ativado
- Lib: ES2015 + DOM
- Output: dist/

## 🎨 Características de Design

- **Tema Escuro**: Interface moderna em preto e vermelho
- **Layout Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Efeitos Hover**: Feedback visual ao passar o mouse
- **Item Ativo**: Destaque do filme selecionado
- **Scroll Independente**: Área de detalhes com scroll próprio
- **Posição Sticky**: Detalhes ficam fixos ao rolar a página

## 💡 Melhorias Futuras Possíveis

- [ ] Debounce na busca (busca automática enquanto digita)
- [ ] Paginação de resultados
- [ ] Filtros por gênero, ano, avaliação
- [ ] Salvar filmes favoritos no localStorage
- [ ] Histórico de buscas
- [ ] Modo claro/escuro
- [ ] Exportar lista de filmes
- [ ] Compartilhar filme específico via URL

## 🐛 Resolução de Problemas

### Erro "Nenhum filme encontrado"
- Verifique a ortografia do nome do filme
- Tente variações do título (em inglês ou português)
- Alguns filmes muito novos podem não estar na base de dados

### Erro ao carregar detalhes
- A API pode estar temporariamente indisponível
- Limite de requisições pode ter sido atingido (crie sua própria key)
- Verifique sua conexão com a internet

### Layout quebrado
- Certifique-se de que `style.css` está no mesmo diretório que `index.html`
- Limpe o cache do navegador (Ctrl+F5 ou Cmd+Shift+R)

## 📝 Licença

Projeto de código aberto para fins educacionais.

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido como estudo de:
- TypeScript e tipagem estática
- Consumo de APIs REST
- Manipulação do DOM
- CSS Grid e Flexbox
- Design responsivo
- UX/UI moderno

---

**Dica**: Para uma melhor experiência, use sua própria API key gratuita da OMDb! 🎬