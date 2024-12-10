import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeExploreComponent } from './home-explore/home-explore.component';
import { AppNavbarComponent } from './navbar/navbar.component';
import { HomeFavoriteComponent } from "./home-favorite/home-favorite.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbarComponent, HomeExploreComponent, HomeFavoriteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MotoBuddy';
}
