import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-if',
  templateUrl: './test-ng-if.component.html',
  styleUrls: ['./test-ng-if.component.css']
})
export class TestNgIfComponent implements OnInit {

  public isShow: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  changeShow() {
    this.isShow = !this.isShow;
  }
}
