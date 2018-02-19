import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

//Routing module
import { AppRoutingModule } from './app-routing.module';
//Root component
import { AppComponent } from './app.component';
//Modules
import { HeroesModule } from './heroes/heroes.module';

//effects
import { HeroEffects } from './core/store/effects/heroEffects';

//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './core/store/reducers/index';

@NgModule({
  declarations: [AppComponent],
  imports: [
  	CommonModule, 
  	BrowserModule, 
  	FormsModule,
  	HttpClientModule,
  	StoreModule.forRoot(reducers),
  	EffectsModule.forRoot([HeroEffects]),
  	StoreDevtoolsModule.instrument({
  		maxAge: 25
  	}),
  	AppRoutingModule, 
  	HeroesModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
