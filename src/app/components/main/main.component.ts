import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  name: string = 'Tien';
  googleURL: string = 'https://www.google.com/';
  colSpan = 2;
  count = 0;
  constructor() {}

  ngOnInit(): void {}

  onBtnClick() {
    console.log('Clicked');
  }
  increase(event) {
    console.log(event);
    this.count += 1;
  }
  reduce() {
    this.count -= 1;
  }
}
