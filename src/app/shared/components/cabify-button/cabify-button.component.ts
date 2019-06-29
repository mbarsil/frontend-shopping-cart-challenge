import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cabify-button',
  templateUrl: './cabify-button.component.html',
  styleUrls: ['./cabify-button.component.scss']
})
export class CabifyButtonComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
