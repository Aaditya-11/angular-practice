// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-register3',
//   standalone: true,
//   imports: [ReactiveFormsModule,CommonModule],
//   templateUrl: './register3.component.html',
//   styleUrl: './register3.component.css'
// })
// export class Register3Component {
//   profileForm= new FormGroup({
//     name:new FormControl('',[Validators.required,Validators.maxLength(40),Validators.pattern('^[a-zA-Z ]*$')]),
//     password:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$'),]),
//     cpassword:new FormControl('',[Validators.required]),
//     phone:new FormControl('',[Validators.required,]),
//     gender:new FormControl('',[Validators.required]),
//     dob:new FormControl('',[Validators.required,Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]), // YYYY-MM-DD format
//   // this.minimumAgeValidator(18) ),
//     email:new FormControl('',[Validators.required,Validators.maxLength(40),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
//     address:new FormControl('',[Validators.required,Validators.maxLength(250)]),
//     termsnconditions:new FormControl('',[Validators.required])

//   })

//    onSubmit(){
//     console.log("On Submit Form..")
//     console.log(this.profileForm.value)
//   }

//   reset(){
//     this.profileForm.setValue({
//       name:'',
//       password:"",
//       cpassword:"",
//       phone:"",
//       gender:"",
//       dob:"",
//       email:"",
//       address:"",
//       termsnconditions:""

//     })
//   }

//   get name(){
//   return this.profileForm.get('name')
// }

//   get password(){
//     return this.profileForm.get('password')
//   }

//   get cpassword(){
//     return this.profileForm.get('cpassword')
//   }
//   get phone(){
//     return this.profileForm.get('phone')
//   }

//   get gender(){
//     return this.profileForm.get('gender')
//   }

//   get dob(){
//     return this.profileForm.get('dob')
//   }

//   get email(){
//     return this.profileForm.get('email')
//   }

//   get address(){
//     return this.profileForm.get('address')
//   }

//   get termsnconditions(){
//     return this.profileForm.get('termsnconditions')
//   }

// }


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register3',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.css']  
})
export class Register3Component {

  // submitted = false;
// submittedData: any = null;
   submittedData:any[] = [];

  passwordMatch : ValidatorFn = (control : AbstractControl ): {[key:string]:boolean} | null => {
    const group = control as FormGroup;
    const password = group.get('password');
    const cpassword = group.get('cpassword');

    if (password && cpassword && password.value !== cpassword.value){
      return {'passwordMismatch':true};
    }
    return null;
  }


  ageValidator: ValidatorFn = (control : AbstractControl ): {[key:string]:boolean} | null => {
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



  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    password: new FormControl('', [
      Validators.required,Validators.minLength(5),
      Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]+$'),
    ]),
    cpassword: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required,Validators.pattern(/^\d{10}$/)]),
    gender: new FormControl('', [Validators.required]),
    dob: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{4}-\d{2}-\d{2}$/), this.ageValidator
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(250)
    ]),
    termsnconditions: new FormControl(false, [Validators.requiredTrue]) 
  },
  [this.passwordMatch]

);
 
    onSubmit() {
    if (this.profileForm.valid) {
      this.submittedData.push(this.profileForm.value);
       this.profileForm.reset();
      // = this.profileForm.value; // Save form data
      console.log('Form Data:', this.submittedData);
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  reset() {
    this.profileForm.reset();
  }

  onUpdate(index: number) {
  const item = this.submittedData[index];
  // Fill the form with selected row data for editing
  this.profileForm.patchValue(item);
  // Remove old row so it will be replaced on form submit
  this.submittedData.splice(index, 1);
}

onDelete(index: number) {
  this.submittedData.splice(index, 1);
}

  // Getters for template

//   get f() {
//   return this.profileForm.controls;
// }

  get name() { return this.profileForm.get('name'); }
  get password() { return this.profileForm.get('password'); }
  get cpassword() { return this.profileForm.get('cpassword'); }
  get phone() { return this.profileForm.get('phone'); }
  get gender() { return this.profileForm.get('gender'); }
  get dob() { return this.profileForm.get('dob'); }
  get email() { return this.profileForm.get('email'); }
  get address() { return this.profileForm.get('address'); }
  get termsnconditions() { return this.profileForm.get('termsnconditions'); }
}
