import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{Pageone}from './primercomponente/primer.component'
import { Pagetwo } from './segundocomponente/segundo.component';
import { pagethree } from './tercero/tercero.component';
@NgModule({
  declarations: [
    AppComponent,
    Pageone,
    Pagetwo,
    pagethree
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
