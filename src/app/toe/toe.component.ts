import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toe',
  templateUrl: './toe.component.html',
  styleUrls: ['./toe.component.css']
})
export class ToeComponent implements OnInit {

  mat = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  mark = 'X';

  constructor() { }

  ngOnInit() {
  }

  markBoard(index: number): void {
    if (this.mat[index] === ' ') {
      this.mat[index] = this.mark;

      if (this.mark === 'X') {
        this.mark = 'O';
      } else {
        this.mark = 'X';
      }
    }
  }

  reset(): void {
    this.mat = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    this.mark = 'X';
  }

}
