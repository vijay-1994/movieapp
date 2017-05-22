import { Component, Input } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent {
 public movies=[];

  constructor(private router:Router){}
 
  searchMovie(movie:string) 
  {
  	console.log("search movie "+movie);
    this.router.navigate(['movie',movie]);
  }
}
