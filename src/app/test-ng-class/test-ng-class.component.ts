import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-class',
  templateUrl: './test-ng-class.component.html',
  styleUrls: ['./test-ng-class.component.css']
})
export class TestNgClassComponent implements OnInit {
  public currentStyle: {};

  constructor() { }

  ngOnInit() {
  }

  public changeStyle(): void {
    this.currentStyle = {
      'modified': true,
      'savable': true,
      'special': true
    };
  }
}
