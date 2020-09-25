import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  result = '';
  typed = '';
  passedFirst: boolean;

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
    this.result = parseFloat(eval(temp)).toFixed(2);
    this.typed = '';
  }
}
