const movieData = {
    action: [
        "Kaithi",
        "Master",
        "Vikram",
        "Thunivu",
        "Leo"
    ],
    comedy: [
        "Boss Engira Baskaran",
        "Kanna Laddu Thinna Aasaya",
        "Velaiilla Pattadhari",
        "Kolamavu Kokila",
    ],
    drama: [
        "Soorai Pottru",
        "Jai Bhim",
        "Maamannan",
        "Ayothi",
        "Visaranai"
    ],
    horror: [
        "Maya",
        "Aval",
        "Demon",
        "Irul",
        "Boomika"
    ],
    romance: [
        "Roja",
        "Kadhal Desam",
        "Enainoki Paayum Thota",
        "Ok Kannmani",
    ]
};

// Get the button and attach event listener
document.getElementById('recommendButton').addEventListener('click', function() {
    const genre = document.getElementById("genre").value; // Get selected genre
    const movies = movieData[genre]; // Fetch movie list for selected genre

    // Get the movie list section and clear previous recommendations
    const movieListSection = document.getElementById("movie-list");
    movieListSection.innerHTML = ""; // Clear any previous movie recommendations

    // Create and display movie recommendations
    movies.forEach(movie => {
        const listItem = document.createElement("li");
        listItem.textContent = movie;
        movieListSection.appendChild(listItem);
    });
});