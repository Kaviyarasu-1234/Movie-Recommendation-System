document.getElementById('recommendButton').addEventListener('click', function () {
    const genre = document.getElementById('genre').value;  // Get selected genre

    // Fetch the CSV file from the local server
    fetch('movies.csv')  // Assuming movies.csv is in the same folder as index.html
        .then(response => response.text())  // Read the file as text
        .then(csvData => {
            const movies = parseCSV(csvData);

            // Filter movies by the selected genre
            const filteredMovies = movies.filter(movie => movie.Genre.toLowerCase() === genre.toLowerCase());

            const movieListSection = document.getElementById('movie-list');
            movieListSection.innerHTML = '';  // Clear previous movie recommendations

            if (filteredMovies.length > 0) {
                // Add each filtered movie as a list item
                filteredMovies.forEach(movie => {
                    const listItem = document.createElement('li');
                    listItem.textContent = movie.Film;
                    movieListSection.appendChild(listItem);
                });
            } else {
                // Display a message if no movies were found
                const listItem = document.createElement('li');
                listItem.textContent = 'No recommendations found for this genre.';
                movieListSection.appendChild(listItem);
            }
        })
        .catch(error => {
            console.error('Error fetching the CSV file:', error);
            const movieListSection = document.getElementById('movie-list');
            movieListSection.innerHTML = '';  // Clear the list in case of error

            // Show error message
            const listItem = document.createElement('li');
            listItem.textContent = 'An error occurred while fetching the recommendations. Please try again later.';
            movieListSection.appendChild(listItem);
        });
});

// Function to parse CSV string into an array of movie objects
function parseCSV(csvString) {
    const rows = csvString.split('\n');
    const headers = rows[0].split(',');  // Assuming the first row contains the headers
    const movies = [];

    // Parse each row into an object
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');
        if (row.length === headers.length) {
            const movie = {};
            for (let j = 0; j < headers.length; j++) {
                movie[headers[j].trim()] = row[j].trim();
            }
            movies.push(movie);
        }
    }
    return movies;
}
