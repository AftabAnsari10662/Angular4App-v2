
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { MovieList } from "./movie-list.component";
import { MovieNewComponent } from "./movie-new.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {
                path: "list",
                component: MovieList
            }, {
                path: "new",
                component: MovieNewComponent
            }
        ], {
                useHash: true
            })
    ],
    declarations: [
        AppComponent,
        MovieList, MovieNewComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}