import { Component } from '@angular/core';

@Component({
  selector: 'app-night-light',
  templateUrl: './night-light.component.html',
  styleUrls: ['./night-light.component.css'],
})
export class NightLightComponent {
  isOn = true;

  switchLight() {
    this.isOn = !this.isOn;
  }
}
