import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId = '';
  password = '';
  captcha = '';
  enteredCaptcha = '';
  displayText = '';
  fullText = 'Welcome Back';
  textIndex = 0;
  isLoading = false;
  isError = false;
  darkMode = false;

  constructor(private auth: AuthService, private router: Router) {
    this.generateCaptcha();
  }

  generateCaptcha() {
    this.captcha = Math.random().toString(36).substring(2, 7);
  }

  login() {
  if (this.enteredCaptcha !== this.captcha) {
    this.triggerError();
    return;
  }

  this.isLoading = true;

  setTimeout(() => {
    this.isLoading = false;

    if (this.auth.login(this.userId, this.password)) {
      this.router.navigate(['/app-welcome']);
    } else {
      this.triggerError();
    }
  }, 1500);
}

triggerError() {
  this.isError = true;
  this.generateCaptcha();
  setTimeout(() => (this.isError = false), 500);
}

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    if (this.textIndex < this.fullText.length) {
      this.displayText += this.fullText.charAt(this.textIndex);
      this.textIndex++;
      setTimeout(() => this.typeText(), 120);
    }
  }
}
