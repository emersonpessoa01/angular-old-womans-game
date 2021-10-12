import { Component } from "@angular/core";
import { environment } from "../../environments/environment";
@Component({
    selector: "app-tic-tac-toe",
    templateUrl: "./tic-tac-toe.component.html",
    styleUrls: ["./tic-tac-toe.component.css"],
})


export class TicTacToeComponent {
    currentPlayer: string = "O";
    winner: string = "";
    board: string[][] = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];

producao = environment.production;


    processPlay(line: number, col: number) {
        // console.log(
        //     `Jogada na linha ${line}, coluna${col} do jogador ${this.currentPlayer}`
        //     );
        if (this.board[line][col] == "" && this.winner == "") {
            this.board[line][col] = this.currentPlayer;
            //verificar vencedor
            if (this.checkWinner(this.currentPlayer)) {
                this.winner = this.currentPlayer;
            }
            if (this.currentPlayer == "O") {
                this.currentPlayer = "X";
            } else {
                this.currentPlayer = "O";
            }
        }
    }

    checkWinner(player: string): boolean {
        //verificar cada linha
        for (let i = 0; i < this.board.length; i++) {
            if (
                this.board[i][0] == player &&
                this.board[i][1] == player &&
                this.board[i][2] == player
            ) {
                return true;
            }
        }
        //verificar cada coluna
        for (let i = 0; i < this.board.length; i++) {
            if (
                this.board[0][i] == player &&
                this.board[1][i] == player &&
                this.board[2][i] == player
            ) {
                return true;
            }
        }
        //verificar cada diagonal
        for (let i = 0; i < this.board.length; i++) {
            if (
                this.board[0][1] == player &&
                this.board[1][2] == player &&
                this.board[2][2] == player
            ) {
                return true;
            }
        }
        //verificar cada diagonal direita
        for (let i = 0; i < this.board.length; i++) {
            if (
                this.board[0][2] == player &&
                this.board[1][1] == player &&
                this.board[2][0] == player
            ) {
                return true;
            }
        }
        //verificar cada diagonal esquerda
        for (let i = 0; i < this.board.length; i++) {
            if (
                this.board[0][0] == player &&
                this.board[1][1] == player &&
                this.board[2][2] == player
            ) {
                return true;
            }
        }

        return false;
    }

    reset() {
        this.currentPlayer = "O";
        this.winner = "";
        this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
    }
}
