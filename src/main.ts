type Movie = {
  Title: string
  Year: string
  imdbID: string
}

type OMDbResponse = {
  Search?: Movie[]
  Response: string
}

const input = document.getElementById("search") as HTMLInputElement
const results = document.getElementById("results") as HTMLUListElement

function searchMovies(query: string): void {
  results.innerHTML = "<li>Carregando...</li>"

  // Usando OMDb com uma key pública de exemplo (você pode pegar a sua grátis em omdbapi.com)
  fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=trilogy`)
    .then(response => response.json())
    .then((data: OMDbResponse) => {
      console.log('Resposta da API:', data) // Debug
      
      if (!data.Search || data.Response === "False") {
        results.innerHTML = "<li>Nenhum filme encontrado</li>"
        return
      }

      results.innerHTML = ""

      data.Search.forEach((movie: Movie) => {
        const li = document.createElement("li")
        li.textContent = `${movie.Title} (${movie.Year})`
        results.appendChild(li)
      })
    })
    .catch((error) => {
      console.error('Erro:', error) // Debug
      results.innerHTML = "<li>Erro ao buscar filmes. Tente novamente.</li>"
    })
}

input.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return
  
  const query = input.value.trim()
  if (!query) return
  
  searchMovies(query)
})