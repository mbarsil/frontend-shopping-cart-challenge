import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cabify-modal',
  templateUrl: './cabify-modal.component.html',
  styleUrls: ['./cabify-modal.component.scss']
})
export class CabifyModalComponent implements OnInit {

  @Input() open : boolean = false;
  @Output() modalClosed = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClose () {
    this.modalClosed.emit();
  }

}
