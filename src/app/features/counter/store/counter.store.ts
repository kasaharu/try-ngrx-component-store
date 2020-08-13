import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface CounterState {
  count: number;
}

@Injectable()
export class CounterStore extends ComponentStore<CounterState> {
  constructor() {
    super({ count: 0 });
  }

  readonly count$: Observable<number> = this.select((state) => state.count);

  readonly addCount = this.updater((state) => ({ count: state.count + 1 }));
}
