import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

}
