import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-interpolation',
  templateUrl: './template-interpolation.component.html',
  styleUrls: ['./template-interpolation.component.css']
})
export class TemplateInterpolationComponent implements OnInit {

  public title: string = 'Fake starwars 2';
  constructor() { }

  ngOnInit() {
  }

  public getVal() {
    return 123123;
  }

}
