import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CounterStore } from '../../store/counter.store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CounterStore],
})
export class CounterComponent implements OnInit {
  constructor(private readonly counterStore: CounterStore) {}
  count$ = this.counterStore.count$;

  ngOnInit(): void {}

  onClick() {
    this.counterStore.addCount();
  }
}
