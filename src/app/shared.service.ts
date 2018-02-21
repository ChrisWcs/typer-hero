import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  count = 0;

  constructor() { }

  increment(): void {
    this.count++;
  }

}
