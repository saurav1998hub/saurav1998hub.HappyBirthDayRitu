import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() open: EventEmitter<any> = new EventEmitter();

  start(){
    this.open.emit(true);
  }
}
