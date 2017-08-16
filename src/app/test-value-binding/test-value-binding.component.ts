import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-value-binding',
  templateUrl: './test-value-binding.component.html',
  styleUrls: ['./test-value-binding.component.css']
})
export class TestValueBindingComponent implements OnInit {

  imgSrc: string = '../assets/imgs/1.jpg';
  constructor() { }

  ngOnInit() {
  }

  public changeSrc(): void {
    if (Math.ceil(Math.random() * 100000000) % 2) {
      this.imgSrc = '../assets/imgs/1.jpg';
    } else {
      this.imgSrc = '../assets/imgs/2.jpg';
    }
  }

}
