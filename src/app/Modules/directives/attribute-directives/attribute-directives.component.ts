import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss'],
})
export class AttributeDirectivesComponent implements OnInit {
  isActive: boolean = false;
  color: string = 'red';
  imgSrc: string = 'https://picsum.photos/200/300';
  html : string = `<div class="py-10 bg-red-400">Inner HTML</div>`
  constructor() {}

  ngOnInit(): void {}
}
