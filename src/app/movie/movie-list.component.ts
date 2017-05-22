import { Component, Input, OnInit} from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from '../model/movie';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.css']
})
export class MovieListComponent implements OnInit{

     a=[];
 constructor(private movieService:MovieService, private route:ActivatedRoute) { }

 ngOnInit(): void
 {
     console.log("inside moviecpom");
     this.route.params.switchMap((params: Params) => 
     	this.movieService.searchMovie(params['movie'])).
     subscribe(a => this.a = a);
       //console.log(a); 
       
      
     
 
 }



}
