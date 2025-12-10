import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterOutlet } from '@angular/router';
import { AlertComponent } from '../reusable-component/alert/alert.component';
@Component({
  selector: 'app-page',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterOutlet,CommonModule,AlertComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
constructor(private router: Router) {}

  goToRegister() {
    this.router.navigate(['/app-componnent-1/page/register']);
  }
  isRegisterRoute(): boolean {
    return this.router.url.includes('register');
  }
}
