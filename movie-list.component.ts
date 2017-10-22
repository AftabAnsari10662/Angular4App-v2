import { Injectable, Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "./movie.model";


@Component({
    selector: "movie-list",
    templateUrl: "./movie-list.component.html"
})
@Injectable()

export class MovieList {

    movies: Movie[];
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get("http://moviestorecore.azurewebsites.net/api/movies")
            .subscribe((response: Movie[]) => {
                this.movies = response;
            })
    }
}