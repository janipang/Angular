import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class AppNavbarComponent {
  keyEnter(event: any) {
    console.log(event.key);
    if (event.keyCode == 13) {
      console.log('Are you sure to submit!');
    }
  }
  handleSubmit(){
    alert("Are you sure to submit!")
  }
}
