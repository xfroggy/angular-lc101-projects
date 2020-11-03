import { Component, OnInit } from "@angular/core";
import { empty } from "rxjs";

@Component({
  selector: "movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent implements OnInit {
  movies = ["Toy Story", "The Shining", "Sleepless in Seattle", "The Martian"];

  constructor() {}

  ngOnInit() {}

  addMovie(newTitle: string) {
    let msgError = "";
    if (newTitle === "") {
      msgError = "No film entered";
    } else if (this.movies.includes(newTitle)) {
      msgError = `${newTitle} is already on the list`;
    } else {
      this.movies.push(newTitle);
    }
    return msgError;
  }
}
