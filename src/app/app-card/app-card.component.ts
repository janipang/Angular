import { Component, Input } from '@angular/core';
import { MotorbikeProfile } from '../motorbike-profile';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.css'
})
export class AppCardComponent {
  @Input() profile!:MotorbikeProfile; //camel case for props name
}
