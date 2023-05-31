import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent {
  @Input() titulo:string;
  @Output() eventoCerrar = new EventEmitter;

  cerrar(){
    this.eventoCerrar.emit();
  }
}
