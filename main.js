
let grid = document.getElementsByClassName('grid-field')[0];
let mousedown = false;

function create_grid(grid, x, y) {
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            let node = document.createElement('div');
            node.setAttribute('class', 'cell');
            grid.appendChild(node);
        }
    }
}

function change_cell_style(cell, color) {
    cell.style.backgroundColor = color;
}

create_grid(grid, 16, 16);

document.addEventListener('mousedown', function(event) {
    if (event.button === 0)
        mousedown = true;
}, false);

document.addEventListener('mouseup', function(event) {
    if (event.button === 0)
        mousedown = false;
}, false);

grid.childNodes.forEach(cell => {
    cell.addEventListener('mousemove', function() {
        if (mousedown) {
            change_cell_style(cell, 'black');
        }
    }, false);

    cell.addEventListener('click', function() {
        change_cell_style(cell, 'black');
    }, false);
});
