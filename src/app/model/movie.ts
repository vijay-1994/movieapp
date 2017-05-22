export class Movie {
	constructor(
		public imdbID: string,
		public Title: string,
		public year: string,
		public poster: string
		) { }
	clone(){
		return new Movie(this.imdbID,this.Title,this.year,this.poster);
	}
}

