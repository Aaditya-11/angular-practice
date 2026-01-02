import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageComponent } from './Dashboard/page/page.component';
import { HomeComponent } from './Dashboard/home/home.component';
import { TableComponent } from './Dashboard/table/table.component';
import { RegisterComponent } from './Dashboard/register/register.component';
import { AccountComponent } from './Dashboard/account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './Dashboard/dynamic-form/dynamic-form.component';
import { Register2Component } from './Dashboard/register2/register2.component';
import { Register3Component } from './Dashboard/register3/register3.component';
import { Register4Component } from './Dashboard/register4/register4.component';
import { Router } from '@angular/router';
import { UserComponent } from './Dashboard/user/user.component';
import { CommonModule } from '@angular/common';
import { GetApiComponentComponent } from './Dashboard/get-api.component/get-api.component.component';
import { PipeComponent } from './Dashboard/pipe/pipe.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Componnent1Component } from './Segregation/componnent-1/componnent-1.component';
import { Componnent2Component } from './Segregation/componnent-2/componnent-2.component';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { WelcomeComponent } from './Animations/welcome/welcome.component';
import { CoursesComponent } from './HashBoard/courses/courses.component';
import { FamilyInfoComponent } from './HashBoard/family-info/family-info.component';
import { MatTabGroup } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MatSnackBarModule,MatTabGroup,FamilyInfoComponent,RouterOutlet,CoursesComponent,WelcomeComponent,MatTabsModule,MatButtonModule,Componnent1Component,Componnent2Component,PipeComponent,CommonModule,PageComponent,HomeComponent,TableComponent,RegisterComponent,AccountComponent,RouterLink,ReactiveFormsModule,Register2Component,Register3Component,Register4Component,DynamicFormComponent,GetApiComponentComponent,MatProgressBarModule,LoginComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // loading = true;  // show loader initially
  // ngOnInit(): void {
  //   // Show progress bar for 15 seconds
  //   setTimeout(() => {
  //     this.loading = false;   // hide it after 15 seconds
  //   }, 5000); // 15000 ms = 15 seconds
  // }

  constructor(public router: Router) {}

//   comp1: boolean = false;
//   comp2: boolean = false;

//   show1(){
//     this.comp1 = true;
//     this.comp2 = false;
//   }
//   show2(){
//     this.comp1 = false;
//     this.comp2 = true;
//   }

// onTabChange(event: any) {
//   const index = event.index;

//   if (index === 0) {
//     this.show1();
//   }
//   if (index === 1) {
//     this.show2();
//   }
// }
onTabChange(event: any) {
  if (event.index === 0) {
    this.router.navigate(['app-componnent-1']);
  }
  if (event.index === 1) {
    this.router.navigate(['app-componnent-2']);
  }
  if (event.index === 2) {
    this.router.navigate(['app-componnent-3']);
  }
  
}

}
