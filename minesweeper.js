document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells:[
    {row:0, col:0, isMine:randomiseMine(), hidden:true},
    {row:0, col:1, isMine:randomiseMine(), hidden:true},
    {row:0, col:2, isMine:randomiseMine(), hidden:true},
    {row:0, col:3, isMine:randomiseMine(), hidden:true},
    {row:0, col:4, isMine:randomiseMine(), hidden:true},
    {row:1, col:0, isMine:randomiseMine(), hidden:true},
    {row:1, col:1, isMine:randomiseMine(), hidden:true},
    {row:1, col:2, isMine:randomiseMine(), hidden:true},
    {row:1, col:3, isMine:randomiseMine(), hidden:true},
    {row:1, col:4, isMine:randomiseMine(), hidden:true},
    {row:2, col:0, isMine:randomiseMine(), hidden:true},
    {row:2, col:1, isMine:randomiseMine(), hidden:true},
    {row:2, col:2, isMine:randomiseMine(), hidden:true},
    {row:2, col:3, isMine:randomiseMine(), hidden:true},
    {row:2, col:4, isMine:randomiseMine(), hidden:true},
    {row:3, col:0, isMine:randomiseMine(), hidden:true},
    {row:3, col:1, isMine:randomiseMine(), hidden:true},
    {row:3, col:2, isMine:randomiseMine(), hidden:true},
    {row:3, col:3, isMine:randomiseMine(), hidden:true},
    {row:3, col:4, isMine:randomiseMine(), hidden:true},
    {row:4, col:0, isMine:randomiseMine(), hidden:true},
    {row:4, col:1, isMine:randomiseMine(), hidden:true},
    {row:4, col:2, isMine:randomiseMine(), hidden:true},
    {row:4, col:3, isMine:randomiseMine(), hidden:true},
    {row:4, col:4, isMine:randomiseMine(), hidden:true},
  ]
}
//This function randomises the number and cell locations of mines
function randomiseMine() {
  if (Math.random() < 0.25) {
    return true
  } else {
    return false
  }
}
    /*for(let i=0; i<board.cells.length; i++) {
      var randomNumber = Math.floor(Math.random()* 11)
      var cell = board.cells[i]
      cell.isMine = randomNumber < 3
    }*/


function startGame () {
  for(let i=0; i<board.cells.length; i++) {
    var cell = board.cells[i]
    cell.surroundingMines = countSurroundingMines(cell)
  }
// Don't remove this function call: it makes the game work!
  lib.initBoard()
  
  document.onclick = checkForWin
  document.oncontextmenu = checkForWin
}

// Define this function to look for a win condition:
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var isWinner = true

  for(let i=0; i<board.cells.length; i++) {
    var cell = board.cells[i]

    if(cell.isMine && !cell.isMarked || cell.hidden && !cell.isMine) {
      isWinner = false
    }
  }
  if (isWinner) {
// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
    lib.displayMessage('You win!')
  }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var count = 0

  var surrounding = lib.getSurroundingCells(cell.row, cell.col)

  for(let i=0; i<surrounding.length; i++) {
    var cell = surrounding[i]

      if(cell.isMine == true) {
        count++
      }
  }
  return count
}


function refresh(){
  window.location.reload();
} 