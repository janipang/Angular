import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-profile-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home-profile-form.component.html',
  styleUrl: './home-profile-form.component.css',
})
export class HomeProfileFormComponent {
  title: string = 'Profile Form';
  username: string = 'username from child';

  @Output() Event = new EventEmitter();
  
  updateProfile() {
    this.Event.emit(this.username);
    console.log(this.username);
  }

  log(event:any){
    console.log(event.key)
  }
}
