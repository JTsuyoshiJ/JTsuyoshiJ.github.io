document.addEventListener("DOMContentLoaded", () => {
    const ratingTableBody = document.getElementById('ratingTableBody');
    const gameResults = JSON.parse(localStorage.getItem('gameResults')) || [];

    gameResults.forEach(result => {
        const row = document.createElement('tr');

        const timeCell = document.createElement('td');
        timeCell.textContent = result.time;
        row.appendChild(timeCell);

        const difficultyCell = document.createElement('td');
        difficultyCell.textContent = result.difficulty;
        row.appendChild(difficultyCell);

        const sizeCell = document.createElement('td');
        sizeCell.textContent = result.size;
        row.appendChild(sizeCell);

        const resultCell = document.createElement('td');
        resultCell.textContent = result.result;
        row.appendChild(resultCell);

        ratingTableBody.appendChild(row);
    });
});