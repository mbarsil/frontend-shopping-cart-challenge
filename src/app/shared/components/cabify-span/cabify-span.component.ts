import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cabify-span',
  templateUrl: './cabify-span.component.html',
  styleUrls: ['./cabify-span.component.scss']
})
export class CabifySpanComponent implements OnInit {

  @Input() normal: boolean;
  @Input() medium: boolean;
  @Input() large: boolean;
  @Input() caps: boolean;
  @Input() bold: boolean;

  constructor() { }

  ngOnInit() { }

}
