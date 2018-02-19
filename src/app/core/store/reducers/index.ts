import { Hero } from '../../../heroes/shared/hero.model';
import * as fromHero from './hero';

export interface State {
	heroes: Hero[];
	selectedHero: Hero;
}

export const reducers = {
	heroes: fromHero.heroesUpdatedReducer,
	selectedHero: fromHero.heroSelectedReducer
}

export const getHeroes = (state: State) => state.heroes;

export const getSelectedHero = (state: State) => state.selectedHero;
