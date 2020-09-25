import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  result = '';
  typed = '';
  longNumber: boolean;

  getNumber(number: string) {
    this.typed += number;
  }

  getSymbol(symbol: string) {
    if (symbol === 'c') {
      this.result = '';
      this.typed = '';
    } else if (this.typed) {
      if (symbol !== 'c') {
        this.typed += symbol;
      }
    }
  }

  getResult() {
    let temp = this.typed.replace('%', '*0.01');
    let temp2 = parseFloat(eval(temp)).toFixed(2);
    let num = 0;
    for (let count of temp2) {
      num += 1;
    }
    if (num > 12) {
      this.longNumber = true;
    }
    this.result = temp2;
    this.typed = '';
  }
}
