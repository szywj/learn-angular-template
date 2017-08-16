import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.css']
})
export class TestPipeComponent implements OnInit {
  public currentTime: any;

  constructor() { 
    setInterval(
      ()=>{this.currentTime=new Date()}
      , 1000
    );
  }

  ngOnInit() {
  }

}
