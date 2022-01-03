const CONTAINER = document.getElementById('container')

function createGrid (numberOfRows) {
    let numberOfSquares = numberOfRows * numberOfRows
    let sizeOfSquares = 960 / numberOfRows
    for (let i = numberOfSquares; i > 0; i--) {
        const DIV = document.createElement('div')
        DIV.setAttribute('style', `width: ${sizeOfSquares}px; height: ${sizeOfSquares}px; background: blue;`)
        DIV.classList.add('innerDiv')
        DIV.onmouseover = () => {DIV.setAttribute('style', `width: ${sizeOfSquares}px; height: ${sizeOfSquares}px; background: red;`)}
        CONTAINER.appendChild(DIV)
    }
}

function clearGrid () {
    let child = CONTAINER.lastElementChild
    while (child) {
        CONTAINER.removeChild(child)
        child = CONTAINER.lastElementChild
    }
}

function newGrid () {
    clearGrid()
    let numberOfRows = Number(prompt('Please enter the number of rows you want your grid to have'))
    if (numberOfRows > 100) {
        numberOfRows = 100
    }else if (numberOfRows < 1) {
        numberOfRows = 1
    }
    createGrid(numberOfRows)
}

const btn = document.getElementById('btn')
btn.addEventListener('click', newGrid)

createGrid(16)