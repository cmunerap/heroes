import { ActionReducer, Action } from '@ngrx/store';
import * as hero from '../actions/hero';
import { Hero } from '../../../heroes/shared/hero.model';

export function heroesUpdatedReducer(state: Hero[] = [], action: hero.HeroesUpdatedAction) {
	switch (action.type) {
		case hero.HEROESUPDATED:
			return action.payload;
		default:
			return state;
	}
}

export function heroSelectedReducer(state: Hero = null, action: hero.HeroSelectAction) {
	switch (action.type) {
		case hero.HEROSELECT:
			return action.payload;
		default:
			return state;
	}
}