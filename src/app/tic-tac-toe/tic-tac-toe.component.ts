import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer: 'X' | 'O' = 'X';
  winner: string | null = null;
  isComputerTurn: boolean = false; // Track if it's the computer's turn

  makeMove(row: number, col: number): void {
    if (!this.board[row][col] && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWin(row, col)) {
        this.winner = this.currentPlayer;
      } else if (this.isBoardFull()) {
        this.winner = 'Draw';
      } else {
        this.switchPlayer();
        if (this.currentPlayer === 'O') {
          this.isComputerTurn = true;
          this.computerMove(); // Computer makes a move
        }
      }
    }
  }

  switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  computerMove(): void {
    if (this.isComputerTurn && !this.winner) {
      const availableMoves = this.getAvailableMoves();
      if (availableMoves.length > 0) {
        const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        setTimeout(() => {
          this.makeMove(randomMove.row, randomMove.col);
          this.isComputerTurn = false; // Reset computer turn
        }, 500); // Add a delay to simulate thinking
      }
    }
  }

  getAvailableMoves(): { row: number; col: number }[] {
    const moves: { row: number; col: number }[] = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (!this.board[row][col]) {
          moves.push({ row, col });
        }
      }
    }
    return moves;
  }

  checkWin(row: number, col: number): boolean {
    // Check row
    if (
      this.board[row][0] === this.currentPlayer &&
      this.board[row][1] === this.currentPlayer &&
      this.board[row][2] === this.currentPlayer
    ) {
      return true;
    }
    // Check column
    if (
      this.board[0][col] === this.currentPlayer &&
      this.board[1][col] === this.currentPlayer &&
      this.board[2][col] === this.currentPlayer
    ) {
      return true;
    }
    // Check diagonals
    if (
      (row === col &&
        this.board[0][0] === this.currentPlayer &&
        this.board[1][1] === this.currentPlayer &&
        this.board[2][2] === this.currentPlayer) ||
      (row + col === 2 &&
        this.board[0][2] === this.currentPlayer &&
        this.board[1][1] === this.currentPlayer &&
        this.board[2][0] === this.currentPlayer)
    ) {
      return true;
    }
    return false;
  }

  isBoardFull(): boolean {
    return this.board.every(row => row.every(cell => cell !== ''));
  }

  resetGame(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.winner = null;
    this.isComputerTurn = false;
  }
}