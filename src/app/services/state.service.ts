import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { State } from '../types/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  state: Subject<State> = new Subject();

  constructor() { }

  setCount(count: number) {
    this.state.next({
      count,
    });
  }
}
