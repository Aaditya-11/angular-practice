import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatLabel, MatFormField } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '../../HashBoard/courses/courses.component';
import { Router } from '@angular/router';
import { FamilyInfoComponent } from '../../HashBoard/family-info/family-info.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatProgressBar } from '@angular/material/progress-bar';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-job-info',
  standalone: true,
  imports: [MatProgressBar,RouterLink,RouterOutlet,MatLabel,MatFormField,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatDatepickerModule,MatNativeDateModule,MatSelectModule,CommonModule,CoursesComponent,FamilyInfoComponent],
  templateUrl: './job-info.component.html',
  styleUrl: './job-info.component.css',
})
export class JobInfoComponent {
  form!: FormGroup;
  positions = [
    'Software Developer',
    'Data Analyst',
    'UI Designer',
    'Project Manager',
  ];
  submittedData: any = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: SharedService
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],

      street1: ['', Validators.required],
      street2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postal: ['', Validators.required],
      country: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],

      position: ['', Validators.required],
      startDate: ['', Validators.required],
      resume: [null],
    });
  }

  uploadFile(event: any) {
    const file = event.target.files[0];
    this.form.patchValue({ resume: file });
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.value; // <-- FIXED
      this.dataService.setJobData({
        ...value,
        resume: this.form.get('resume')?.value, // include file
      });
      this.router.navigate(['app-componnent-2/app-family-info']);
    }
  }
}
