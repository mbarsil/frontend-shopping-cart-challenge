import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cabify-header',
  templateUrl: './cabify-header.component.html',
  styleUrls: ['./cabify-header.component.scss']
})
export class CabifyHeaderComponent implements OnInit {


  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
