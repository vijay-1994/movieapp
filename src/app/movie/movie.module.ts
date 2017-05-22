import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAppMaterialModule } from '../movie-app-material.module';
import {RouterModule,Router,Routes } from '@angular/router';
//import { MovieDetailsComponent } from './movie-details.component';
import { MovieListComponent } from './movie-list.component';

import { MovieService } from './movie.service';

const route:Routes = [{path:'movie/:movie',component:MovieListComponent}];

@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MovieAppMaterialModule,
    [RouterModule.forRoot(route)]
  ],
  providers: [ MovieService ],
  exports: [ MovieListComponent ]
})
export class MovieModule { }
