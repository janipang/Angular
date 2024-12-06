import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class AppNavbarComponent {

  suggestedFilter = "PCX160"
  keyEnter(event: any) {
    console.log(event.key);
  }

  handleSubmit(user: HTMLInputElement){
    console.log(user.value)
  }
}
