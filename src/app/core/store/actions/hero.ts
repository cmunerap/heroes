import { Hero } from '../../../heroes/shared/hero.model';
import { Action } from '@ngrx/store';

export const HEROESUPDATE = '[Hero] UpdateAll';
export const HEROESUPDATED = '[Hero] UpdatedAll';
export const HEROSELECT = '[Hero] Select';

export class HeroesUpdateAction implements Action {
	type = HEROESUPDATE;
}

export class HeroesUpdatedAction implements Action {
	type = HEROESUPDATED;
	constructor(public payload: Hero[]) {}
}

export class HeroSelectAction implements Action {
	type = HEROSELECT;
	constructor(public payload: Hero) {}
}