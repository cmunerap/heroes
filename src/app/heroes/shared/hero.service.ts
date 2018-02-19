import { HttpClient } from '@angular/common/http';
import { Hero } from './hero.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
	constructor(private http: HttpClient) {}

	getHeroes(): Observable<Hero[]> {
		//I believe that it's not necessary do any treatment on the data.
		// Because of that I will avoid any kind of mapping
		return this.http.get<Hero[]>('https://udem.herokuapp.com/heroes');
	}
}