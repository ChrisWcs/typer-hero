import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: Number = 0;

  constructor() { }

  ngOnInit() {
  }

  addNumber(amount): void {
    this.count += amount;
  }

}
