import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: any = {};

  @Output() onSelect = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  selectMovie() {
    this.onSelect.emit(this.movie);
  }

  deleteMovie() {
    this.onDelete.emit({ ...this.movie });
  }
}
