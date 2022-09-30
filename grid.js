// grab container to place cells in
const container = document.querySelector('.grid-container');

// remove all children elements from parent element
function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

// remove all children from container and append a new grid
function createEmptyGrid(rows, cols) {
    // remove all children from container
    removeAllChildren(container);

    // create default cell
    const cell = document.createElement('div');
    cell.style.backgroundColor = 'white';
    cell.style.borderStyle = 'dotted';
    cell.style.borderColor = 'black';

    // create grid of cells and append it to the container
    const grid = [...Array(16)].map(_ => Array(16).fill(null)); // matrix
    for (let i = 0; i < rows; i++)       // rows
        for (let j = 0; j < cols; j++) { // cols
            grid[i][j] = cell.cloneNode(true);
            container.appendChild(grid[i][j]);
        }
    container.style.gridTemplateColumns = `repeat(${cols}, auto)`;

    return grid;
}


console.log(container);
const grid = createEmptyGrid(16, 16);
grid[0][1].style.backgroundColor = 'black';