const CONTAINER = document.getElementById('container')
function createGrid (numberOfRows) {
    let numberOfSquares = numberOfRows * numberOfRows
    let sizeOfSquares = 960 / numberOfRows
    for (let i = numberOfSquares; i > 0; i--) {
        const DIV = document.createElement('div')
        DIV.setAttribute('style', `width: ${sizeOfSquares}px; height: ${sizeOfSquares}px;`)
        CONTAINER.appendChild(DIV)
    }
}
createGrid(16)