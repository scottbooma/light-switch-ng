import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent {
  @Output() isOn = new EventEmitter();

  @Input() switched!: boolean;

  handleClick() {
    this.isOn.emit();
  }
}
