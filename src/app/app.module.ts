import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MovieAppMaterialModule } from './movie-app-material.module';
import {RouterModule,Router,Routes } from '@angular/router';
import { MovieModule } from './movie/movie.module';
import { SearchModule } from './search/search.module';

import { AppComponent } from './app.component';
import { Movie } from './model/movie';
import { EmitterService } from './shared/emitter.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieAppMaterialModule,
    MovieModule,
    SearchModule,
    RouterModule
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
