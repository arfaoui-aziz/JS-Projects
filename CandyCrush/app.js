document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const scoreDisplay = document.getElementById("score");
  const width = 8;
  let squares = [];
  let score = 0;

  // const candyColors = ["red", "yellow", "green", "orange", "purple", "blue"];
  const candyColors = [
    "url(images/red-candy.png)",
    "url(images/yellow-candy.png)",
    "url(images/orange-candy.png)",
    "url(images/purple-candy.png)",
    "url(images/green-candy.png)",
    "url(images/blue-candy.png)",
  ];
  //Create Board
  const createBoard = () => {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("draggable", true);
      square.setAttribute("id", i);
      let randomColor = Math.floor(Math.random() * candyColors.length);
      square.style.backgroundImage = candyColors[randomColor];
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
    colorBeingDragged = this.style.backgroundImage;
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
    colorBeingReplaced = this.style.backgroundImage;
    squareIdBeingReplaced = parseInt(this.id);
    //Swap 2 colors/divs
    this.style.backgroundImage = colorBeingDragged;
    squares[squareIdBeingDragged].style.backgroundImage = colorBeingReplaced;
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
      squares[squareIdBeingReplaced].style.backgroundImage = colorBeingReplaced;
      squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged;
    } else
      squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged;
    //if outside grid
  }

  //drop candies once some have been cleared
  function moveIntoSquareBelow() {
    for (i = 0; i < 55; i++) {
      if (squares[i + width].style.backgroundImage === "") {
        squares[i + width].style.backgroundImage =
          squares[i].style.backgroundImage;
        squares[i].style.backgroundImage = "";
        const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
        const isFirstRow = firstRow.includes(i);
        if (isFirstRow && squares[i].style.backgroundImage === "") {
          let randomColor = Math.floor(Math.random() * candyColors.length);
          squares[i].style.backgroundImage = candyColors[randomColor];
        }
      }
    }
  }

  //checking for matches in

  function checkRowForThree() {
    for (let i = 0; i < squares.length - 2; i++) {
      let rowOfThree = [i, i + 1, i + 2];
      let currentColor = squares[i].style.backgroundImage;
      const isBlank = squares[i].style.backgroundImage === "";

      const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55];
      if (notValid.includes(i)) continue;

      if (
        rowOfThree.every(
          (index) =>
            squares[index].style.backgroundImage === currentColor && !isBlank
        )
      ) {
        score += 3;
        scoreDisplay.innerHTML = score;
        rowOfThree.forEach((index) => {
          squares[index].style.backgroundImage = "";
        });
        console.log(score);
      }
    }
  }

  function checkColumnForThree() {
    for (let i = 0; i < squares.length - width * 2; i++) {
      let ColumnOfThree = [i, i + width, i + width * 2];
      let currentColor = squares[i].style.backgroundImage;
      const isBlank = squares[i].style.backgroundImage === "";

      if (
        ColumnOfThree.every(
          (index) =>
            squares[index].style.backgroundImage === currentColor && !isBlank
        )
      ) {
        score += 3;
        scoreDisplay.innerHTML = score;
        ColumnOfThree.forEach((index) => {
          squares[index].style.backgroundImage = "";
        });
        console.log(score);
      }
    }
  }

  window.setInterval(function () {
    checkRowForThree();
    checkColumnForThree();
    moveIntoSquareBelow();
  }, 100);
});
