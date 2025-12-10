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
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CoursesComponent } from '../courses/courses.component';
@Component({
  selector: 'app-family-info',
  standalone: true,
  imports: [
    JsonPipe,
    RouterOutlet,
    RouterLink,
    MatLabel,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    CommonModule,
  ],
  templateUrl: './family-info.component.html',
  styleUrl: './family-info.component.css',
})
export class FamilyInfoComponent {
  familyForm!: FormGroup;
  fjobroles = ['Private', 'Government', 'Business', 'Househusband'];
  mjobroles = ['Private', 'Government', 'Business', 'Housewife'];
  submittedFamilyData: any = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: SharedService,
    private dialog: MatDialog
  ) {
    this.familyForm = this.fb.group({
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],

      street1: ['', Validators.required],
      street2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postal: ['', Validators.required],
      country: ['', Validators.required],

      femail: ['', [Validators.required, Validators.email]],
      memail: ['', [Validators.required, Validators.email]],
      fphone: ['', Validators.required],
      mphone: ['', Validators.required],

      fjobrole: ['', Validators.required],
      mjobrole: ['', Validators.required],
      fdob: ['', Validators.required],
      mdob: ['', Validators.required],
    });
  }

  submit() {
    if (this.familyForm.valid) {
      const value = this.familyForm.value; // <-- FIXED
      this.dataService.setFamilyData(value);
      const fullData = this.dataService.getCombinedData();
      console.log(fullData);
      this.dialog.open(CoursesComponent, {
        width: '450px',
        maxHeight: '80vh',
        height: 'auto',
        data: fullData,// goes to courses
      });
    }
  }
}
