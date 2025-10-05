import { getMovieReviewData } from "./data.js";

// console.log(getMovieReviewData());

function init () {
    const movieReviewData = getMovieReviewData();
    const stats = paintStatistics(movieReviewData);
    const topMovie = paintMovieData(movieReviewData);
    // console.log(stats);
    // console.log(topMovie);
    // return stats;
};

function paintStatistics (movieReviewData) {
    const flatReviewData = movieReviewData.flat();
    const totalMovies = movieReviewData.length;
    const totalReviews = flatReviewData.length;
    const totalRating = flatReviewData.reduce((acc, item) => acc + item.rating, 0);
    const avgRating = (totalRating / totalReviews).toFixed(2);
    // return { totalMovies, totalReviews, totalRating, avgRating };

    const totalMoviesEl = document.getElementById('tMoviesID');
    addStat (totalMoviesEl, totalMovies);
    const totalReviewsEl = document.getElementById('tReviewsID');
    addStat (totalReviewsEl, totalReviews);
    const avgRatingEl = document.getElementById('tAvgRatingID');
    addStat (avgRatingEl, avgRating);
}

function addStat (el, value) {
    const spanEL = document.createElement("span");
    spanEL.classList.add("text-6xl", "font-bold", "text-blue-600");
    spanEL.innerText = value;
    el.appendChild(spanEL);
};

function paintMovieData (movieReviewData) {
    const flatReviewData = movieReviewData.flat();
    const movieListEl = document.querySelector("#movieListID UL");

    // console.log(movieListEl);
    flatReviewData.map(movie => {
        // console.log(movie);
        const liEl = document.createElement("LI");
        liEl.classList.add("border", "border-gray-300", "rounded", "card", "p-4", "mb-2");
        liEl.innerHTML = `
            <h3 class="text-xl font-semibold mb-2">${movie.title} - <span class="text-yellow-500">${'★'.repeat(movie.rating)}</span></h3>
            <p class="mb-2">${movie.content}</p>
            <p class="text-sm text-gray-600">Reviewed by ${movie.by} on ${new Date(movie.on).toLocaleDateString()}</p>`;
        movieListEl.appendChild(liEl);
    });
}

init();
// console.log(init());