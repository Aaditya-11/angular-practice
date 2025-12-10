import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ValidatorFn,AbstractControl, ReactiveFormsModule, FormControl} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AlertComponent } from '../reusable-component/alert/alert.component';



@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ ReactiveFormsModule , MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,CommonModule,MatSelectModule, MatButtonModule,MatDatepickerModule,MatNativeDateModule,AlertComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  // userForm: FormGroup;
  hidePassword = true;
  hideCPassword = true;
  genders = ['Male', 'Female', 'Other'];

  passwordMatchValidator : ValidatorFn = (control : AbstractControl ): {[key:string]:boolean} | null => {
    const group = control as FormGroup;
    const password = group.get('password');
    const cpassword = group.get('cpassword');

    if (password && cpassword && password.value !== cpassword.value){
      return {'passwordMismatch':true};
    }
    return null;
  }

   minimumAgeValidator: ValidatorFn = (control : AbstractControl ): {[key:string]:boolean} | null => {
      const dob = control.value;
      if (!dob) return null;
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())){
        age--;
      }
      return age <18 ? {underAge: true} : null;
    }



  // constructor(private fb: FormBuilder) {
    // Initialize form with validators
    // this.userForm = this.fb.group({
    userForm= new FormGroup({
      name: new FormControl('', [ Validators.required,
      Validators.maxLength(40),
      Validators.pattern('^[a-zA-Z ]*$')]),
      password: new FormControl ('', [Validators.required,Validators.minLength(5),
      Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]+$')]),
      cpassword: new FormControl('',[ Validators.required]),
      phone: new FormControl('', [Validators.required,Validators.maxLength(10)]),
      gender: new FormControl('',[ Validators.required]) ,
      dob: new FormControl('', [Validators.required,Validators.pattern(/^\d{4}-\d{2}-\d{2}$/), this.minimumAgeValidator]),
      email:new FormControl('', [Validators.required,Validators.maxLength(40),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      address:new FormControl('', [Validators.required,Validators.maxLength(250)])
    },[this.passwordMatchValidator]
    );
  

  // Getter for easy access in HTML
  get name() {return this.userForm.get('name');}

  get password() { return this.userForm.get('password');}

  get cpassword() { return this.userForm.get('cpassword');}

  get phone() { return this.userForm.get('phone');}

  get gender() { return this.userForm.get('gender');}

  get dob() { return this.userForm.get('dob');}

  get email() { return this.userForm.get('email');}

  get address() { return this.userForm.get('address');}

  // passwordMatchValidator(form: FormGroup) {
  //   const pass = form.get('password')?.value;
  //   const cpass = form.get('cpassword')?.value;
  //   return pass === cpass ? null : { passwordMismatch: true };
  // }
  // passwordMatchValidator : ValidatorFn = (control : AbstractControl ): {[key:string]:boolean} | null => {
  //   const group = control as FormGroup;
  //   const password = group.get('password');
  //   const cpassword = group.get('cpassword');

  //   if (password && cpassword && password.value !== cpassword.value){
  //     return {'passwordMismatch':true};
  //   }
  //   return null;
  // }

  //  minimumAgeValidator(minAge: number) {
  //   return (control: any) => {
  //     const dob = new Date(control.value);
  //     const today = new Date();
  //     const age = today.getFullYear() - dob.getFullYear();
  //     const monthDiff = today.getMonth() - dob.getMonth();
  //     const dayDiff = today.getDate() - dob.getDate();

  //     // Adjust age if birthday hasn’t happened yet this year
  //     const isBeforeBirthday = monthDiff < 0 || (monthDiff === 0 && dayDiff < 0);
  //     const actualAge = isBeforeBirthday ? age - 1 : age;

  //     return actualAge >= minAge ? null : { minAge: true };
  //   };
  // }

  // minimumAgeValidator: ValidatorFn = (control : AbstractControl ): {[key:string]:boolean} | null => {
  //     const dob = control.value;
  //     if (!dob) return null;
  //     const birthDate = new Date(dob);
  //     const today = new Date();
  //     let age = today.getFullYear() - birthDate.getFullYear();
  //     const monthDiff = today.getMonth() - birthDate.getMonth();
  //     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())){
  //       age--;
  //     }
  //     return age <18 ? {underAge: true} : null;
  //   }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted:', this.userForm.value);
      alert('Form Submitted! Check console for values.');
      this.userForm.reset();
    }
  }

}
