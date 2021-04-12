import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent implements OnInit {

  name:string = 'cyber-soft';
  srcImg:string = 'https://picsum.photos/200/200';


  constructor() { };

  changeName = () => {
    this.name = 'Changed!';
  }

  showName = () => {
    
  }

  ngOnInit(): void {
  }

}
