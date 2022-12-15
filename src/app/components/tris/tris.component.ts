import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tris',
  templateUrl: './tris.component.html',
  styleUrls: ['./tris.component.scss']
})
export class TrisComponent implements OnInit {
  squares!: any[]
  xIsNext!: boolean
  winner!: string | null
  disable!: boolean

  constructor() { }

  ngOnInit(): void {
    this.newGame()
  }


  newGame() {
    this.disable = false
    this.squares = Array(9).fill(null)
    this.winner = null
    this.xIsNext = true
  }

  get player() {
    return this.xIsNext ? 'X' : 'O'
  }

  makeMove(idX: number) {
    if (!this.squares[idX]) {
      this.squares.splice(idX, 1, this.player)
      this.xIsNext = !this.xIsNext
    }
    this.winner = this.calculateWinner()
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        this.disable = true
        return this.squares[a]

      }

    }
    return null
  }

}


