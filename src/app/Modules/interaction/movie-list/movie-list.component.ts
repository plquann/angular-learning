import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input() movies = [];

  selectedMovie: any = null;
  constructor() {}

  ngOnInit(): void {}

  selectMovie(movie: any) {
    this.selectedMovie = movie;
  }
}
