import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Hero } from '../domain/hero';
import { HeroService } from '../service/hero.service';

export interface HeroState {
  selectedHero: Hero | null;
}

@Injectable()
export class HeroStore extends ComponentStore<HeroState> {
  constructor(private readonly heroService: HeroService) {
    super({ selectedHero: null });
  }

  readonly getHero = this.effect((id$: Observable<number>) => {
    return id$.pipe(
      switchMap((id) =>
        this.heroService.getHeroes().pipe(
          tap({
            next: (heroes) => {
              const result = heroes.find((hero) => hero.id === id);
              if (result) {
                this.setHero(result);
              }
            },
          }),
        ),
      ),
    );
  });

  readonly setHero = this.updater((_, hero: Hero) => ({ selectedHero: hero }));
  readonly selectedHero$: Observable<Hero | null> = this.select((state) => state.selectedHero);
}
