import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  count = 0;

  constructor(private stateService: StateService) {
  }

  ngOnInit(): void {
    this.stateService.state.subscribe(state => {
      this.count = state.count;
    });
  }

  increment() {
    this.stateService.setCount(this.count + 1);
  }

  decrement() {
    this.stateService.setCount(this.count - 1);
  }

}
