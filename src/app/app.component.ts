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
    // if (this.typed) {
    //   if (symbol !== 'c' && symbol !== '%') {
    //     switch (symbol) {
    //       case '+':
    //     }
    //     this.typed += symbol;
    //   }
    // }
  }

  getResult() {}
}
