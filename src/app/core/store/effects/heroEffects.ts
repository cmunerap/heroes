import { HeroesUpdatedAction } from '../actions/hero';
import { HeroService } from '../../../heroes/shared/hero.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as hero from '../actions/hero';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class HeroEffects {
	@Effect()
	update$: Observable<Action> = this.actions$
		.ofType(hero.HEROESUPDATE)
		.switchMap(() =>
			this.heroService.getHeroes()
				.map(data => new HeroesUpdatedAction(data))
		);
	
	constructor(
		private heroService: HeroService,
		private actions$: Actions
	) {}	
}