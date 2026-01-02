import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componnent-3',
  standalone: true,
  imports: [RouterOutlet,MatProgressBar,CommonModule],
  templateUrl: './componnent-3.component.html',
  styleUrl: './componnent-3.component.css'
})
export class Componnent3Component {
  loading = true;  // show loader initially
  ngOnInit(): void {
        // Show progress bar for 15 seconds
    setTimeout(() => {
      this.loading = false;   // hide it after 15 seconds
    }, 5000); // 15000 ms = 15 seconds
  }
  isLoginForm: boolean = false;
  registerObj: any = {
  "userId": 0,
  "userName": "",
  "emailId": "",
  "fullName": "",
  "role": "",
  "createdDate": new Date(),
  "password": "",
  "projectName": "",
  "refreshToken": "",
  "refreshTokenExpiryTime": new Date() 
  }
  openModal(){
    const model = document.getElementById("myModal");
    if(model !=null){
      model.style.display ='block'
    }
  }
  closeModal(){
    const model = document.getElementById("myModal");
    if(model !=null){
      model.style.display ='none'
    }
  }


  
}
