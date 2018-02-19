import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

//actions
import { HeroesUpdateAction, HeroSelectAction } from '../../core/store/actions/hero';

//models
import { Hero } from '../shared/hero.model';

//store
import { Store } from '@ngrx/store';

//reducers
import * as fromRoot from '../../core/store/reducers';


@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.html',
  styleUrls: ['./hero-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {
  private heroes$: Observable<Hero[]>;
  private selectedHero$: Observable<Hero>;

  constructor(public store: Store<fromRoot.State>) {
  	this.heroes$ = store.select(fromRoot.getHeroes);
  	this.selectedHero$ = store.select(fromRoot.getSelectedHero);
  }

  ngOnInit() {
  	this.store.dispatch(new HeroesUpdateAction());
  }

  onHeroSelected(hero: Hero) {
  	if (hero) {
  		this.store.dispatch(new HeroSelectAction(hero));
  	}
  }
}
