import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  count: number = 0;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.state.subscribe(value => {
      this.count = value.count;
    });
  }

}
