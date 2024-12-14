import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeExploreComponent } from './home-explore/home-explore.component';
import { AppNavbarComponent } from './navbar/navbar.component';
import { HomeFavoriteComponent } from './home-favorite/home-favorite.component';
import { NgFor } from '@angular/common';
import { HomeProfileComponent } from "./home-profile/home-profile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppNavbarComponent,
    HomeExploreComponent,
    HomeFavoriteComponent,
    HomeProfileComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'MotoBuddy';
  contents: string[] = [];
  @ViewChild(HomeExploreComponent) explore!: HomeExploreComponent;
  @ViewChild(HomeFavoriteComponent) favorite!: HomeFavoriteComponent;

  ngAfterViewInit() {
    this.contents.push(this.explore.title);
    this.contents.push(this.favorite.title);

    console.log(this.contents);
  }
}
