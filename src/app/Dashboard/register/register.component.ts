import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,UserComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name = new FormControl();
  password = new FormControl();

  displayValue() {
    console.log(this.name.value, this.password.value);
  }

  resetValue() {
    this.name.setValue('');
    this.password.setValue('');
  }

// parentUsers: string[] = [];

// receiveUsers(data: string[]) {
//   this.parentUsers = data;
//   console.log("Users received from child:", this.parentUsers);
// }

// Child to Parent child as usercomponent parent as registercomponent
  handleChild(msg: string) {  // receive from child
    console.log("Message from child:", msg);
  }
}
