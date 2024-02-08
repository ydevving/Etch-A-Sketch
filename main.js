
let grid = document.getElementsByClassName('grid-field')[0];
let mousedown = false;

function add_event_listeners(cell) {
    cell.cell = cell;

    cell.addEventListener('mousemove', function(e) {
        let cell = e.currentTarget.cell;

        if (cell.style.backgroundColor === 'white') {
            //change_cell_style(cell, 'black')
        }

        if (mousedown) {
            change_cell_style(cell, 'black');
        }
    }, false);

    cell.addEventListener('mouseenter', function() {
        
    },
    false);

    cell.addEventListener('mouseleave', function() {

    }, false);

    cell.addEventListener('click', function() {
        change_cell_style(cell, 'black');
    }, false);
}

function create_grid(grid, size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let node = document.createElement('div');
            node.classList.add('cell');

            let proportion = (Number(grid.getBoundingClientRect().width) / Number(size)) - 2;
            console.log(proportion);

            node.style.backgroundColor = 'white';
            node.style.width = node.style.height = `${proportion}px`;

            add_event_listeners(node);

            grid.appendChild(node);
        }
    }
}

function delete_grid(grid) {
    while (grid.lastElementChild) {
        grid.removeChild(grid.lastElementChild);
      }
}

function change_cell_style(cell, color) {
    cell.style.backgroundColor = color;
}

function isInt(value) {
    if (isNaN(value)) {
      return false;
    }
    let x = parseFloat(value);
    return (x | 0) === x;
}

create_grid(grid, 16);

let lower_range = 12;
let higher_range = 80;

function change_grid_size() {
    let chosen_size = prompt(`Choose your desired size within the range ${lower_range}-${higher_range}: `);

    if (!isInt(chosen_size)) {
        alert('Input an integer');
        return false;
    }

    if (chosen_size < lower_range || chosen_size > higher_range) {
        alert('Range should be between 12 and 80 only');
        return false;
    }

    delete_grid(grid);
    create_grid(grid, chosen_size)

    console.log(grid);

    return true;
}

function add_event_listeners(cell) {
    cell.cell = cell;

    cell.addEventListener('mousemove', function(e) {
        let cell = e.currentTarget.cell;

        if (cell.style.backgroundColor === 'white') {
            //change_cell_style(cell, 'black')
        }

        if (mousedown) {
            change_cell_style(cell, 'black');
        }
    }, false);

    cell.addEventListener('mouseenter', function() {
        
    },
    false);

    cell.addEventListener('mouseleave', function() {

    }, false);

    cell.addEventListener('click', function() {
        change_cell_style(cell, 'black');
    }, false);
}

document.addEventListener('mousedown', function(event) {
    if (event.button === 0)
        mousedown = true;
}, false);

document.addEventListener('mouseup', function(event) {
    if (event.button === 0)
        mousedown = false;
}, false);
