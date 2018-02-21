import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  clock = new Date().toTimeString();
  id;

  constructor() {
    this.id = setInterval( () => {
      this.clock = new Date().toTimeString();
    }, 1000);
  }

  ngOnInit() {
  }

}
