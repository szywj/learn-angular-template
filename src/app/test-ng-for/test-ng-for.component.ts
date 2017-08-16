import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-for',
  templateUrl: './test-ng-for.component.html',
  styleUrls: ['./test-ng-for.component.css']
})
export class TestNgForComponent implements OnInit {

  public index: number;
  public animals: Array<any> = [
    {name: 'Cat'},
    {name: 'Dog'},
    {name: 'Pig'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
