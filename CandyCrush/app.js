document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const width = 8;
  const squares = [];

  const candyColors = ["red", "yellow", "green", "orange", "purple", "blue"];

  //Create Board
  const createBoard = () => {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("draggable", true);
      square.setAttribute("id", i);
      let randomColor = Math.floor(Math.random() * candyColors.length);
      square.style.backgroundColor = candyColors[randomColor];
      grid.appendChild(square);
      squares.push(square);
    }
  };

  createBoard();

  //Drag the candies

  let colorBeingDragged,
    colorBeingReplaced,
    squareIdBeingDragged,
    squareIdBeingReplaced;

  squares.forEach((square) => square.addEventListener("dragstart", dragStart));
  squares.forEach((square) => square.addEventListener("dragend", dragEnd));
  squares.forEach((square) => square.addEventListener("dragover", dragOver));
  squares.forEach((square) => square.addEventListener("dragenter", dragEnter));
  squares.forEach((square) => square.addEventListener("dragleave", dragLeave));
  squares.forEach((square) => square.addEventListener("drop", dragDrop));

  function dragStart() {
    colorBeingDragged = this.style.backgroundColor;
    squareIdBeingDragged = parseInt(this.id);
    console.log(colorBeingDragged, this.id, "dragstart");
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
  }

  function dragLeave() {}

  function dragDrop(e) {
    console.log(this.id, "dragdrop");
    colorBeingReplaced = this.style.backgroundColor;
    squareIdBeingReplaced = parseInt(this.id);
    //Swap 2 colors/divs
    this.style.backgroundColor = colorBeingDragged;
    squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced;
  }

  function dragEnd() {
    //Define validMoves
    let validMoves = [
      squareIdBeingDragged - 1,
      squareIdBeingDragged - width, //top
      squareIdBeingDragged + 1,
      squareIdBeingDragged + width, // bottom
    ];

    let isValidMove = validMoves.includes(squareIdBeingReplaced);
    if (squareIdBeingReplaced && isValidMove) {
      squareIdBeingReplaced = null;
    } else if (squareIdBeingReplaced && !isValidMove) {
      // if not a valid move we keep the same old values we don't swap
      squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced;
      squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged;
    } else
      squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged;
    //if outside grid
  }
});
