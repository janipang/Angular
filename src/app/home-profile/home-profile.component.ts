import { Component} from '@angular/core';
import { HomeProfileFormComponent } from "./home-profile-form/home-profile-form.component";

@Component({
  selector: 'app-home-profile',
  standalone: true,
  imports: [ HomeProfileFormComponent],
  templateUrl: './home-profile.component.html',
  styleUrl: './home-profile.component.css',
})
export class HomeProfileComponent {
  title: string = "Profile"
  username: string = ""
  
  handleOnUpdateProfile(username: string){
    this.username = username;
    console.log(this.username);
  }
}
