import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { PageComponent } from '../../Dashboard/page/page.component';
import { HomeComponent } from '../../Dashboard/home/home.component';
import { TableComponent } from '../../Dashboard/table/table.component';
import { Register2Component } from '../../Dashboard/register2/register2.component';
import { RegisterComponent } from '../../Dashboard/register/register.component';
import { AccountComponent } from '../../Dashboard/account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from '../../Dashboard/dynamic-form/dynamic-form.component';
import { Register3Component } from '../../Dashboard/register3/register3.component';
import { Register4Component } from '../../Dashboard/register4/register4.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../../Dashboard/user/user.component';
import { GetApiComponentComponent } from '../../Dashboard/get-api.component/get-api.component.component';
import { PipeComponent } from '../../Dashboard/pipe/pipe.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-componnent-1',
  standalone: true,
  imports:[MatButtonModule,RouterOutlet,PipeComponent,CommonModule,PageComponent,HomeComponent,TableComponent,RegisterComponent,AccountComponent,RouterLink,ReactiveFormsModule,Register2Component,Register3Component,Register4Component,DynamicFormComponent,GetApiComponentComponent,MatProgressBarModule],
  templateUrl: './componnent-1.component.html',
  styleUrl: './componnent-1.component.css',
})
export class Componnent1Component {
  ngOnInit(): void {
        // Show progress bar for 15 seconds
    setTimeout(() => {
      this.loading = false;   // hide it after 15 seconds
    }, 5000); // 15000 ms = 15 seconds
  }
  // ngOnDestroy(): void {
  //   console.log('componwnt1 destroyed');
  // }
    loading = true;  // show loader initially
 
}
