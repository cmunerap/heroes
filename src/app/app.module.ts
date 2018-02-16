import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
//Routing module
import { AppRoutingModule } from './app-routing.module';
//Root component
import { AppComponent } from './app.component';
//Modules
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, HeroesModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
