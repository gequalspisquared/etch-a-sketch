// grab container to place cells in
const container = document.querySelector('.grid-container');

// remove all children elements from parent element
function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

// what the cell should do
function cellFunctionality(e) {
    const cell = e.target;
    cell.style.backgroundColor = 'black';
}

// adds event listeners to each cell
function addCellFunctionality() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', 
        cellFunctionality));
}

// remove all children from container and append a new grid
function createEmptyGrid(rows, cols) {
    // reset the grid
    removeAllChildren(container);

    // create default cell
    const cell = document.createElement('div');
    cell.style.backgroundColor = 'white';
    cell.style.borderStyle = 'dotted';
    cell.style.borderWidth = '1px';
    cell.style.borderColor = 'black';
    cell.style.cursor = 'pointer';

    // create grid of cells and append it to the container
    const grid = [...Array(16)].map(_ => Array(16).fill(null)); // matrix
    for (let i = 0; i < rows; i++)       // rows
        for (let j = 0; j < cols; j++) { // cols
            grid[i][j] = cell.cloneNode(true);
            grid[i][j].classList.add('cell');
            container.appendChild(grid[i][j]);
        }
    container.style.gridTemplateColumns = `repeat(${cols}, auto)`;
    addCellFunctionality();

    return grid;
}

const grid = createEmptyGrid(16, 16);