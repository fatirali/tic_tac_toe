
//Gameboard will be the factory function that houses all gameboard interactions
// 1. It will house the actual board array
// 2. A function to reset the board back to it's original
// 3. Know the current state of the board

(function gameboard () {
    const rows = 3 ;
    const columns = 3;
    board = [];

    
    for (let i=0; i<rows; i++) {
        board[i] = [];
        for (let j=0; j<columns; j++) {
                board[i].push([])
            }
        
    }   
    console.log(board)

    const pickCell = function() {
        // player can select any of the 9 cells as long as they don't already have a token applied to it
        // once cell is picked by player and depending on what token the player has.
        // The cell now has the associated token
    }

    const printBoard = function() {
        // it runs through the entire 3x3 board. going through each row and associated column
        // then it checks whether each cell has a token applied to it and what token is applied
        // It then prints this map of the board for the player to see!
    } 

    const resetBoard = function() {
        // goes through each call and checks if there is a token there.
        // If there is a token, it removes the token. 
        // Does this motion of each cell until the entire board is clear
    }


    return { board };
})();

// Create Players
function Players() {
    // create an array of player 1 and player 2. Assign a token for each
    const players = [
        {
            name: 'Player One',
            token:1
        },
        {
            name: 'Player Two',
            token:2
        }
    ]
    return {players}
};
console.log(Players());


function GameController() {
    //player one selects an value in the array. 
    //Then Player 2 selects the value in the array. 
    // this function has all the win states stored
    // As soon as one of the win states is achieved, the game is complete
    const rounds = 3;
    const turns = 9;
    // First, the player enters their of their name
    // Then the game begins and player 1 selects a spot on the gameboard
    for (i=0; i<rounds; i++) {
        function playRound() {
            const playerOne = prompt("Please enter your name, Player 1")
            const playerTwo = prompt("Please enter your name, Player 2")
            console.log("Player 1, please enter your selection")
            //Player must pick a valid token
        }
    }
    // Add Cell and create a map representation for the console.


    // as long as the following array locations have the same non null token value, 
    // the game is won by the player based one which token value have achieved 
    // the correct location 
    // [[1, 1, 1], 
    //  [2, 2, 1],
    //  [1, 2. 2]]
    // 
    function checkWinner (board) {
        // check rows
        for (i=0; i < 3; i++) {
            if (board[i][0] !== 0 &&
                board[i][0] === board [i][1] &&
                board[i][0] === board[i][2]
            )
            return board[i][0];
        }
        //check columns
        for (j=0; j<3; j++) {
            if (board[0][j] !== 0 &&
                board[0][j] === board [1][j] &&
                board[0][j] === board [2][j]
            )
            return board[0][j];
        }
        // check diagonals
        if (board[0][0] !==0 &&
                board[0][0] === board[1][1] &&
                board[0][0] === board[2][2]
            )
            return board[0][0];

            else if (board[0][2] !==0 &&
                board[0][2] === board[1][1] &&
                board[0][2] === board[2][0]
            )
            return board[0][2];
        }
        // check draw - Draw board is full
        // if all board options have either a value of X(1) or O(2)
        // got through each row and each column, check if the value is null
        // if all values are not null then the game is a draw!

        for (let i=0; i<3; i++) {           // go through every row
            for (let j=0; j<3; j++) {       // for each column in every row
                board[i][j] !== 0           // Goes through each board cell and checks if any value is 0 or null

            }
        }
}


// Create a Cell function, this function should be able to have full 
// contol over functionality of each cell. Which is a section of the tictactoe board
// Here are what each of the cell token's mean
// 0: This cell has no token
// 1: This cell has Player 1's Token
// 2: This call has Player 2's Token













// function Book(author, title, pages, read) {
//     if (!new.target) {
//         throw Error("You must use the 'new' operator to call the constructor");
//       }
//     this.author = author;
//     this.title = title;
//     this.pages = pages;
//     this.read = read;

//     this.bookInfo = function () {
//         return `${author}, ${title}, ${pages}, ${read}`;
//     }    
// }

// const theHobbit = new Book('Tolken', 'The Hobbit', 297, 'yes')

// console.log(theHobbit.bookInfo());
