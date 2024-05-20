let movieInput = document.getElementById('movie-name'),
    searchBtn = document.getElementById('search-btn'),
    result = document.getElementById('result'),
    bookButtonContainer = document.getElementById('book-button-container');

// Function to fetch movie info from API
let getMovieInfo = () => {
    let movieName = movieInput.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    // Hide the book button initially
    bookButtonContainer.style.display = 'none';

    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
    } else {
        fetch(url).then((res) => res.json()).then((data) => {
            if (data.Response == 'True') {
                result.innerHTML = `
                <div class="info">
                <img class="poster" src=${data.Poster} alt="Poster"></img>
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        <img src="star-icon.svg" style="width: 19px; height: 17px;" alt="Rating Star">
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>   
                        <span>${data.Year}</span>   
                        <span>${data.Runtime}</span>   
                    </div>
                    <div class="genre">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                </div>
                </div>
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p>
                `;

                // Show the book button after successful search
                bookButtonContainer.style.display = 'block';
            } else {
                result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
            }
        })
        // If error occurs
        .catch(() => {
            result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
        });
    }
};

searchBtn.addEventListener("click", getMovieInfo);
// window.addEventListener("load", getMovieInfo);
