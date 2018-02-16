import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeroComponent } from './hero/hero';
import { HeroListComponent } from './hero-list/hero-list';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeroComponent, HeroListComponent]
})
export class HeroesModule { }