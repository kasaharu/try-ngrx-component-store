import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
