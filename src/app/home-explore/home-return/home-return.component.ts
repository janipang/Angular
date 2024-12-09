import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-return',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
  templateUrl: './home-return.component.html',
  styleUrl: './home-return.component.css',
})
export class HomeReturnComponent {
  inReturnPeriod: boolean = true
  membershipLevel = "platinum" // diamond platinum gold silver copper
}
