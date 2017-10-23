
import { Injectable, Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/Router";
import { Movie } from "./movie.model";



@Component({
    selector: "movie-new",
    templateUrl: "./movie-new.component.html"
})
@Injectable()
export class MovieNewComponent {
    movie: Movie;
    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.movie = new Movie(0, "", 0);
    }

    save() {
        this.http.post("http://moviestorecore.azurewebsites.net/api/movies", this.movie)
            .subscribe((movie) => {
                this.router.navigate(["/list"]);
            })
    }
}