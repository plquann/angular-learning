import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  @Output() onAdd = new EventEmitter();

  form: any = {
    name: '',
    desc: '',
    image: '',
  };

  constructor() {}

  ngOnInit(): void {}

  handleAddMovie() {
    const id = Math.floor(Math.random() * 10);
    this.onAdd.emit({ ...this.form, id });
  }
}
