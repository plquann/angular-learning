import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent implements OnInit {
  movies: any[] = [
    {
      id: 1,
      name: 'Alone',
      desc: 'Lorem ipsum dolor sit amet, consectetur adip',
      image: 'assets/images/movie1.jpg',
    },
    {
      id: 2,
      name: 'Mars',
      desc: 'Lorem ipsum dolor sit amet, consectetur adip',
      image: 'assets/images/movie2.jpg',
    },
    {
      id: 3,
      name: 'Venus',
      desc: 'Lorem ipsum dolor sit amet, consectetur adip',
      image: 'assets/images/movie3.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleAddMovie(movie: any) {
    this.movies.push(movie);
  }
}
