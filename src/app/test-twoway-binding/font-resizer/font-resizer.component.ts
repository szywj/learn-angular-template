import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'font-resizer',
  templateUrl: './font-resizer.component.html',
  styleUrls: ['./font-resizer.component.css']
})
export class FontResizerComponent implements OnInit {
  @Input() size: number;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  dec() { this.resize(-1) };
  inc() { this.resize(+1) };

  resize(delta: number): void {
    this.size += delta;
    this.sizeChange.emit(this.size);
  }
}
