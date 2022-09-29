const container = document.querySelector('.container');

const box = document.createElement('div');
let rowOfBoxes = new Array(16);
for (let i = 0; i < 16; i++) {
    rowOfBoxes[i] = box.cloneNode();
}
let boxes = new Array(16);
for (let i = 0; i < 16; i++) {
    boxes[i] = new Array(16);
    for (let j = 0; j < 16; j++) {
        boxes[i][j] = rowOfBoxes[i].cloneNode();
    }
}

for (let i = 0; i < 16; i++) 
    for (let j = 0; j < 16; j++) {
        boxes[i][j].style.backgroundColor = 'black';
        container.appendChild(boxes[i][j]);
    }

console.log(boxes);

// container.appendChild(boxes);