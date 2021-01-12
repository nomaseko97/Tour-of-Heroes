import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './New-Components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './New-Components/hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
