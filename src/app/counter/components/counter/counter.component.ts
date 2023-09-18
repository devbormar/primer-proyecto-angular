import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Counter: {{ counter }}</h1>

  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(+1)">+1</button>
  `
})

export class CounterComponent  {

  public counter: number = 10;

  constructor() { }

  increaseBy(value: number):void {
    // console.log(item);
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 0;
  }
}
