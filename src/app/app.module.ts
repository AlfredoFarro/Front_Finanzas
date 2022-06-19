import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{Pageone}from './primercomponente/primer.component'
import { Pagetwo } from './segundocomponente/segundo.component';
@NgModule({
  declarations: [
    AppComponent,
    Pageone,
    Pagetwo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
