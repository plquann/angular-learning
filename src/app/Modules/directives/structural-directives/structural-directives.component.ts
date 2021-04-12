import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  isActive: boolean = false;
  isLoggedIn: boolean = false;
  color: string = 'red';
  students: any[] = [
    {name: 'kas', age:25},
    {name: 'add', age: 21},
    {name: 'sas', age:22}
  ];

  constructor() {}

  ngOnInit(): void {}

  changeColor(event: any): void {
    this.color = event.target.value;
  }
}
