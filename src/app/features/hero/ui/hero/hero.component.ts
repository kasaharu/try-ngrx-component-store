import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../domain/hero';
import { HeroStore } from '../../store/hero.store';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HeroStore],
})
export class HeroComponent implements OnInit {
  constructor(private readonly heroStore: HeroStore) {}
  hero$: Observable<Hero | null> = this.heroStore.selectedHero$;
  selectedHeroId = 1;

  ngOnInit(): void {
    this.shuffle();
  }

  shuffle() {
    this.selectedHeroId = Math.floor(Math.random() * 10);
    this.heroStore.getHero(this.selectedHeroId);
    // tslint:disable-next-line:no-console
    console.log('[debug] ----- num: ', this.selectedHeroId);
  }
}
