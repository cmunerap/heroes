import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './heroes/hero-list/hero-list';
import { HeroComponent } from './heroes/hero/hero';

const routes: Routes = [
	{ path: '', component: HeroListComponent },
	{ path: 'hero', component: HeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
