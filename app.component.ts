import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  content = '';
  result;
  choice;
  number1 = '';
  number2 = '';
  calculate() {
    switch (this.choice) {
      case 1:
        this.result = Number(this.number1) + Number(this.number2);
        break;
      case 2:
        this.result = Number(this.number1) - Number(this.number2);
        break;
      case 3:
        this.result = Number(this.number1) * Number(this.number2);
        break;
      case 4:
        this.result = Number(this.number1) / Number(this.number2);
        break;
      default:
        this.result = 0;
        break;
    }
    this.content = String(this.result);
    this.number2 = this.result;
  }
  setChoice(operation, symbol){
    this.choice = operation;
    this.number1 = this.number2;
    this.number2 = '';
    this.content = symbol;

  }
  displayContent(value){
    if(Number(this.number2)==this.result){
      this.number2 = '';
      this.result = undefined;
    }
    this.number2 = this.number2 + value;
    this.content = this.number2;
  }
  resetDisplay(){
    this.content = '';
    this.number2 = '';
  }
}
