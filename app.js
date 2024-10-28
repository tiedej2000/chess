const gameBoard = document.querySelector('#gameboard')
const playerDisplay = document.querySelector('#player')
const width = 8

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
]

function createBoard(){
    console.log('Created Board')
    startPieces.forEach((startPiece,i) => {
        const square = document.createElement('div')
        square.setAttribute('square-id',i)
        square.classList.add('square')
        square.innerHTML = startPiece
        square.firstChild?.setAttribute('draggable', true)
        const row = Math.floor((63 - i) / 8) + 1
        if(row %2 === 0){
            square.classList.add(i % 2 === 0 ? 'beige' : 'brown')
        } else {
            square.classList.add(i % 2 === 0 ? 'brown' : 'beige')
        }

        if (i <= 15){
            square.firstChild.firstChild.classList.add('black')
        } 

        if(i >= 48){
            square.firstChild.firstChild.classList.add('white')
        }

        gameBoard.append(square)

    })
}

createBoard()

const allSquaeres = document.querySelectorAll('#gameboard .square')

allSquaeres.forEach(square =>{
    square.addEventListener('dragstart', dragStart)
})

let startPositionId = null
let draggedElement = null

function dragStart(e){
    startPositionId = e.target.parentNode.getAttribute('square-id')
    draggedElement = e.target
}