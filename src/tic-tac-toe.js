class TicTacToe {
  constructor() {
    this.player = 'x';
    this.board = [[null, null, null],
                  [null, null, null],
                  [null, null, null]];
  }

  getCurrentPlayerSymbol() {
    return this.player;
  }

  nextTurn(rowIndex, columnIndex) {

    if (this.board[rowIndex][columnIndex] === null) {
      this.board[rowIndex][columnIndex] = this.player;
      if (this.player === 'x') {
        this.player = 'o';
      } else {
        this.player = 'x';
      }
    }
    return this.player;
  }

  isFinished() {
    if (this.isDraw() || this.getWinner()) {
      return true;
    }
    return false;
  }

  getWinner() {
    switch (true) {
      case (this.board[0][0] === this.board[0][1] && this.board[0][0] === this.board[0][2] && this.board[0][0] !== null):
        return this.board[0][0];
      case (this.board[1][0] === this.board[1][1] && this.board[1][0] === this.board[1][2] && this.board[1][0] !== null):
        return this.board[1][0];
      case (this.board[2][0] === this.board[2][1] && this.board[2][0] === this.board[2][2] && this.board[2][0] !== null):
        return this.board[2][0];
      case (this.board[0][0] === this.board[1][0] && this.board[0][0] === this.board[2][0] && this.board[0][0] !== null):
        return this.board[0][0];
      case (this.board[0][1] === this.board[1][1] && this.board[0][1] === this.board[2][1] && this.board[0][1] !== null):
        return this.board[0][1];
      case (this.board[0][2] === this.board[1][2] && this.board[0][2] === this.board[2][2] && this.board[0][2] !== null):
        return this.board[0][2];
      case (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2] && this.board[0][0] !== null):
        return this.board[0][0];
      case (this.board[2][0] === this.board[1][1] && this.board[2][0] === this.board[0][2] && this.board[2][0] !== null):
        return this.board[2][0];
      default :
        return null;
    }
  }

  noMoreTurns() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === null) {
          return false;
        }
      }
    }
    return true;
  }

  isDraw() {
    if (this.noMoreTurns() && !this.getWinner()) {
      return true;
    }
    return false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.board[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
