"use strict";
const input = document.getElementById("search");
const results = document.getElementById("results");
const detailsSection = document.getElementById("details-section");
const movieDetails = document.getElementById("movie-details");
const closeBtn = document.getElementById("close-details");
let currentSelectedLi = null;
function searchMovies(query) {
    results.innerHTML = "<li>Carregando...</li>";
    // Limpar detalhes ao fazer nova busca
    hideDetails();
    fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=trilogy`)
        .then(response => response.json())
        .then((data) => {
        console.log('Resposta da API:', data);
        if (!data.Search || data.Response === "False") {
            results.innerHTML = "<li>Nenhum filme encontrado</li>";
            return;
        }
        results.innerHTML = "";
        data.Search.forEach((movie) => {
            const li = document.createElement("li");
            li.textContent = `${movie.Title} (${movie.Year})`;
            li.dataset.imdbId = movie.imdbID;
            li.addEventListener("click", () => {
                // Remover classe active do item anterior
                if (currentSelectedLi) {
                    currentSelectedLi.classList.remove("active");
                }
                // Adicionar classe active ao item clicado
                li.classList.add("active");
                currentSelectedLi = li;
                loadMovieDetails(movie.imdbID);
            });
            results.appendChild(li);
        });
    })
        .catch((error) => {
        console.error('Erro:', error);
        results.innerHTML = "<li>Erro ao buscar filmes. Tente novamente.</li>";
    });
}
function loadMovieDetails(imdbID) {
    movieDetails.innerHTML = "<p class='loading'>Carregando detalhes...</p>";
    detailsSection.classList.remove("hidden");
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=trilogy&plot=full`)
        .then(response => response.json())
        .then((data) => {
        console.log('Detalhes do filme:', data);
        if (data.Response === "False") {
            movieDetails.innerHTML = "<p>Não foi possível carregar os detalhes.</p>";
            return;
        }
        displayMovieDetails(data);
    })
        .catch((error) => {
        console.error('Erro ao carregar detalhes:', error);
        movieDetails.innerHTML = "<p>Erro ao carregar detalhes. Tente novamente.</p>";
    });
}
function displayMovieDetails(movie) {
    let html = `
    <h3 class="detail-title">${movie.Title}</h3>
    <div class="detail-year">${movie.Year} • ${movie.Runtime} • ${movie.Rated}</div>
  `;
    if (movie.Plot && movie.Plot !== "N/A") {
        html += `
      <div class="detail-section">
        <span class="detail-label">Sinopse</span>
        <p class="detail-value">${movie.Plot}</p>
      </div>
    `;
    }
    if (movie.Genre && movie.Genre !== "N/A") {
        html += `
      <div class="detail-section">
        <span class="detail-label">Gênero</span>
        <p class="detail-value">${movie.Genre}</p>
      </div>
    `;
    }
    if (movie.Director && movie.Director !== "N/A") {
        html += `
      <div class="detail-section">
        <span class="detail-label">Diretor</span>
        <p class="detail-value">${movie.Director}</p>
      </div>
    `;
    }
    if (movie.Writer && movie.Writer !== "N/A") {
        html += `
      <div class="detail-section">
        <span class="detail-label">Roteirista</span>
        <p class="detail-value">${movie.Writer}</p>
      </div>
    `;
    }
    if (movie.Actors && movie.Actors !== "N/A") {
        html += `
      <div class="detail-section">
        <span class="detail-label">Elenco</span>
        <p class="detail-value">${movie.Actors}</p>
      </div>
    `;
    }
    if (movie.Awards && movie.Awards !== "N/A") {
        html += `
      <div class="detail-section">
        <span class="detail-label">Prêmios</span>
        <p class="detail-value">${movie.Awards}</p>
      </div>
    `;
    }
    if (movie.BoxOffice && movie.BoxOffice !== "N/A") {
        html += `
      <div class="detail-section">
        <span class="detail-label">Bilheteria</span>
        <p class="detail-value">${movie.BoxOffice}</p>
      </div>
    `;
    }
    if (movie.Language && movie.Language !== "N/A") {
        html += `
      <div class="detail-section">
        <span class="detail-label">Idioma</span>
        <p class="detail-value">${movie.Language}</p>
      </div>
    `;
    }
    if (movie.Country && movie.Country !== "N/A") {
        html += `
      <div class="detail-section">
        <span class="detail-label">País</span>
        <p class="detail-value">${movie.Country}</p>
      </div>
    `;
    }
    // Avaliações
    if (movie.Ratings && movie.Ratings.length > 0) {
        html += `
      <div class="detail-section">
        <span class="detail-label">Avaliações</span>
        <div class="rating-container">
    `;
        movie.Ratings.forEach(rating => {
            html += `
        <div class="rating-item">
          <span class="rating-source">${rating.Source}</span>
          <span class="rating-value">${rating.Value}</span>
        </div>
      `;
        });
        html += `
        </div>
      </div>
    `;
    }
    // Adicionar IMDb info se disponível
    if (movie.imdbRating && movie.imdbRating !== "N/A") {
        html += `
      <div class="detail-section">
        <span class="detail-label">IMDb</span>
        <p class="detail-value">${movie.imdbRating}/10 (${movie.imdbVotes} votos)</p>
      </div>
    `;
    }
    movieDetails.innerHTML = html;
}
function hideDetails() {
    detailsSection.classList.add("hidden");
    if (currentSelectedLi) {
        currentSelectedLi.classList.remove("active");
        currentSelectedLi = null;
    }
}
// Event listeners
input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter")
        return;
    const query = input.value.trim();
    if (!query)
        return;
    searchMovies(query);
});
closeBtn.addEventListener("click", hideDetails);