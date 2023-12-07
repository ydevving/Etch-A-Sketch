
let grid = document.getElementsByClassName('grid-field')[0];

function create_grid(x, y) {
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            let node = document.createElement('div');
            node.setAttribute('class', 'cell')
            grid.appendChild(node);
        }
    }
}


