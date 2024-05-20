const movies = [
    { title: "The Shawshank Redemption", director: "Frank Darabont", releaseYear: 1994, poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg", imdbLink: "https://www.imdb.com/title/tt0111161/" },
    { title: "The Godfather", director: "Francis Ford Coppola", releaseYear: 1972, poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", imdbLink: "https://www.imdb.com/title/tt0068646/" },
    { title: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008, poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg", imdbLink: "https://www.imdb.com/title/tt0468569/" },
    { title: "Pulp Fiction", director: "Quentin Tarantino", releaseYear: 1994, poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", imdbLink: "https://www.imdb.com/title/tt0110912/" },
    { title: "Forrest Gump", director: "Robert Zemeckis", releaseYear: 1994, poster: "https://de.web.img3.acsta.net/pictures/bzp/01/10568.jpg", imdbLink: "https://www.imdb.com/title/tt0109830/" },
    { title: "Inception", director: "Christopher Nolan", releaseYear: 2010, poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg", imdbLink: "https://www.imdb.com/title/tt1375666/" },
    { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", releaseYear: 1999, poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg", imdbLink: "https://www.imdb.com/title/tt0133093/" },
    { title: "Interstellar", director: "Christopher Nolan", releaseYear: 2014, poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg", imdbLink: "https://www.imdb.com/title/tt0816692/" },
    { title: "Fight Club", director: "David Fincher", releaseYear: 1999, poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", imdbLink: "https://www.imdb.com/title/tt0137523/" },
    { title: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", releaseYear: 2003, poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", imdbLink: "https://www.imdb.com/title/tt0167260/" }
];

const moviesList = document.getElementById('moviesList');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const moviesPerPage = 3;

function showMovies() {
    moviesList.innerHTML = '';
    const slicedMovies = movies.slice(currentIndex, currentIndex + moviesPerPage);
    slicedMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title} Poster" style="width: 100%;">
            <h2 class="movie-title">${movie.title}</h2>
            <p>Director: ${movie.director}</p>
            <p>Release Year: ${movie.releaseYear}</p>
            <button class="rating-button" onclick="window.open('${movie.imdbLink}', '_blank')">Rating</button>
        `;
        moviesList.appendChild(movieCard);
    });
}

function slideNext() {
    if (currentIndex < movies.length - moviesPerPage) {
        currentIndex += moviesPerPage;
        showMovies();
    }
}

function slidePrev() {
    if (currentIndex > 0) {
        currentIndex -= moviesPerPage;
        showMovies();
    }
}

prevBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);

showMovies();
