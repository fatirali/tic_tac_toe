//Gameboard will be the factory function that houses all gameboard interactions
// 1. It will house the actual board array
// 2. A function to reset the board back to it's original
// 3. Know the current state of the board

function gameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }
  console.log(board);

  const getBoard = () => board; //prints the board to start the game

  const pickCell = function (row, col, player) {
    // player can select any of the 9 cells as long as they don't already have a token applied to it
    // once cell is picked by player and depending on what token the player has.
    // The cell now has the associated token

    // first check which cell has tokens = 0
    // if the selected cell has a token of value that is 0
    // Allow player to add their token to the box
    const cell = board[row][col];

    if (cell.getValue() === 0) {
      cell.addToken(player);
      console.log(`player ${player} picked cell ${row}, ${col}`);
      return true;
    } else {
      console.log("You cannot make this move");
    }
  };

  const printBoard = function () {
    // it runs through the entire 3x3 board. going through each row and associated column
    // then it checks whether each cell has a token applied to it and what token is applied
    // It then prints this map of the board for the player to see!
    const boardWithCellValues = board.map((row) =>
      row.map((cell) => cell.getValue())
    );
    console.log(boardWithCellValues);
  };

  return { getBoard, printBoard, pickCell };
}

function Cell() {
  let value = 0;

  // accept a players token to change the value of a cell
  const addToken = (player) => {
    value = player;
  };

  // How will we retrieve the current value of this cell through closure
  const getValue = () => value;

  return {
    addToken,
    getValue,
  };
}

function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  // create an array of player 1 and player 2. Assign a token for each
  //
  const players = [
    {
      name: "Player One",
      token: 1,
    },
    {
      name: "Player Two",
      token: 2,
    },
  ];
  let activePlayer = players[0];

  let gameOver = false;

  const board = gameBoard();

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const isGameOver = () => gameOver;

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn`);
  };

  const playRound = function () {
    if (gameOver) {
        return
    };

    validMove = false;

    while (!validMove) {
      let move = parseInt(
        prompt(
          `Player ${
            getActivePlayer().name
          }, enter your move, pick between 1 - 9: `
        )
      );
      if (move < 1 || move > 9) {
        console.log("Invalid input. Choose a number from 1 to 9.");
        return;
      }
      const row = Math.floor((move - 1) / 3);
      const col = (move - 1) % 3;
      const success = board.pickCell(row, col, getActivePlayer().token);

      if (!success) {
        console.log("Not a Valid Move. Pick Another Move");
        continue;
      }
      validMove = true;
    }

    const winner = checkWinner(board.getBoard());
    // console.log(winner);
    if (winner === 1 || winner === 2) {
      console.log(`player ${winner} wins!`);
      board.printBoard();
      gameOver=true;
      return;
    }
    if (isDraw(board.getBoard())) {
      board.printBoard();
      console.log("it's a draw!");
      gameOver=true;
      return;
    }

    switchPlayerTurn();
    printNewRound();
  };

  function checkWinner(board) {
    // check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0].getValue() !== 0 &&
        board[i][0].getValue() === board[i][1].getValue() &&
        board[i][0].getValue() === board[i][2].getValue()
      )
        return board[i][0].getValue();
    }
    //check columns
    for (let j = 0; j < 3; j++) {
      if (
        board[0][j].getValue() !== 0 &&
        board[0][j].getValue() === board[1][j].getValue() &&
        board[0][j].getValue() === board[2][j].getValue()
      )
        return board[0][j].getValue();
    }
    // check diagonals
    if (
      board[0][0].getValue() !== 0 &&
      board[0][0].getValue() === board[1][1].getValue() &&
      board[0][0].getValue() === board[2][2].getValue()
    )
      return board[0][0].getValue();
    else if (
      board[0][2].getValue() !== 0 &&
      board[0][2].getValue() === board[1][1].getValue() &&
      board[0][2].getValue() === board[2][0].getValue()
    )
      return board[0][2].getValue();
  }
  // check draw - Draw board is full
  // if all board options have either a value of X(1) or O(2)
  // got through each row and each column, check if the value is null
  // if all values are not null then the game is a draw!

  function isDraw(board) {
    return board.every((row) => row.every((cell) => cell.getValue() !== 0));
  }

  return {
    playRound,
    getActivePlayer,
    isGameOver
  };
}
const game = GameController();
while (!game.isGameOver()) {
  game.playRound();
};
