import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home-explore',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home-explore.component.html',
  styleUrl: './home-explore.component.css'
})
export class HomeExploreComponent {

}
