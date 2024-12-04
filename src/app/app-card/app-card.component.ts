import { Component, Input } from '@angular/core';
import { MotorbikeProfile } from '../motorbike-profile';
import { EngineSizeEnum } from '../engine-size-enum';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.css'
})
export class AppCardComponent {
  @Input() profile!:MotorbikeProfile; //camel case for props name
  favorited: boolean = true;
  EngineSizeEnum = EngineSizeEnum;
  handleFavoriteClicked(){
    alert("added to fav");
  }
}
