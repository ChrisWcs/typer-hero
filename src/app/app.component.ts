import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  words: string[] = ['he', 'she', 'book', 'shelf', 'piano'];

  @Input() text = 'works';
  index = 0;
  word: string = this.words[this.index];

  checkResult(): void {
    if (this.words[this.index] === this.text) {
      this.text = '';
      this.index++;
      this.word = this.words[this.index];
    }
  }
}
