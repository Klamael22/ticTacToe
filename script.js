const gameStatusDisplay = document.querySelector('[data-game-display]');
const newGameButton = document.querySelector('[data-reset-button]')
const gameBoardSquareList = document.querySelectorAll('.gameBoardSquare');

const Players = (symbol) => {
    this.symbol = symbol;

    const getSymbol = () => {
        return symbol;
    };
    return { getSymbol };
};

const Gameboard = (() => {
    gameBoardArr = ['', '', '', '', '', '', '', '', ''];

    const getBoardArr = (squareIndex) => {
        return gameBoardArr[squareIndex];
    }

    const setBoardArr = (squareIndex, playerSymbol) => {

        return gameBoardArr[squareIndex] = playerSymbol;
    }

    const resetBoard = () => {
        for (var i = 0; i < gameBoardArr.length; i++) {
            //loop thru gameBoardArr to clear each index
            count = 0;
            gameBoardArr[i] = '';
            gameBoardSquareList[i].innerHTML = '';
            gameStatusDisplay.innerHTML = 'Player X\'s turn';

        } return gameBoardArr;
    }

    const evaluate = (playerSymbol) => {
        if (gameBoardArr[0] == playerSymbol
            && gameBoardArr[1] == playerSymbol
            && gameBoardArr[2] == playerSymbol) {
            gameStatusDisplay.innerHTML = `Player ${playerSymbol} wins!`
        } else if (gameBoardArr[3] == playerSymbol
            && gameBoardArr[4] == playerSymbol
            && gameBoardArr[5] == playerSymbol) {
            gameStatusDisplay.innerHTML = `Player ${playerSymbol} wins!`
        } else if (gameBoardArr[6] == playerSymbol
            && gameBoardArr[7] == playerSymbol
            && gameBoardArr[8] == playerSymbol) {
            gameStatusDisplay.innerHTML = `Player ${playerSymbol} wins!`
        } else if (gameBoardArr[0] == playerSymbol
            && gameBoardArr[3] == playerSymbol
            && gameBoardArr[6] == playerSymbol) {
            gameStatusDisplay.innerHTML = `Player ${playerSymbol} wins!`
        } else if (gameBoardArr[1] == playerSymbol
            && gameBoardArr[4] == playerSymbol
            && gameBoardArr[7] == playerSymbol) {
            gameStatusDisplay.innerHTML = `Player ${playerSymbol} wins!`
        } else if (gameBoardArr[2] == playerSymbol
            && gameBoardArr[5] == playerSymbol
            && gameBoardArr[8] == playerSymbol) {
            gameStatusDisplay.innerHTML = `Player ${playerSymbol} wins!`
        } else if (gameBoardArr[0] == playerSymbol
            && gameBoardArr[4] == playerSymbol
            && gameBoardArr[8] == playerSymbol) {
            gameStatusDisplay.innerHTML = `Player ${playerSymbol} wins!`
        } else if (gameBoardArr[2] == playerSymbol
            && gameBoardArr[4] == playerSymbol
            && gameBoardArr[6] == playerSymbol) {
            gameStatusDisplay.innerHTML = `Player ${playerSymbol} wins!`
        } else if (count == 9) {
            gameStatusDisplay.innerHTML = 'It\'s a draw!'
        }
    }

    return { getBoardArr, setBoardArr, resetBoard, evaluate };
})();

const updateSquares = (index, symbol) => {
    gameBoardSquareList[index].innerHTML = symbol
}

const updateDisplayTxt = () => {
    if (count % 2 == 0) {
        gameStatusDisplay.innerHTML = 'Player X\'s turn';
    } else {
        gameStatusDisplay.innerHTML = 'Player O\'s turn';
    }
}
const gamePlay = (i) => {
    if (gameBoardSquareList[i].innerHTML !== '') { return }
    if (count % 2 == 0 || count == 0) {
        Gameboard.setBoardArr(i, playerX.getSymbol());
        updateSquares(i, playerX.getSymbol())
        count += 1;
        updateDisplayTxt();
        Gameboard.evaluate(playerX.getSymbol())

    } else {
        Gameboard.setBoardArr(i, playerO.getSymbol())
        updateSquares(i, playerO.getSymbol())
        count += 1;
        updateDisplayTxt();
        Gameboard.evaluate(playerO.getSymbol())
    }
}

newGameButton.addEventListener('click', Gameboard.resetBoard);

for (let i = 0; i < gameBoardSquareList.length; i++) {
    gameBoardSquareList[i].addEventListener('click', () => {
        gamePlay(i);
    })
}

var count = 0;
const playerX = Players('X');
const playerO = Players('O');




