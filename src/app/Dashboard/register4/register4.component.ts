import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register4',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule, JsonPipe],
  templateUrl: './register4.component.html',
  styleUrl: './register4.component.css',
})
export class Register4Component {
  // userDetails :any;

  // addDetails(val:NgForm){
  //   console.log(val);
  //   this.userDetails = val;
  // }
  studentObj: any = {
    firstname: '',
    lastname: ''
  };
  data: any;
  allowOnlyLetters(event: KeyboardEvent) {
    const pattern = /^[a-zA-Z ]$/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  }
  onSubmit() {
    this.data = this.studentObj;
  }
  onReset() {
    this.studentObj = {
      firstname: '',
      lastname: '',
    };
  }
}
