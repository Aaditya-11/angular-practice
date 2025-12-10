import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Validators , FormControl,FormGroup, ReactiveFormsModule, FormsModule, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {
// myForm!: FormGroup;
// educationList: any =[];

//   profileForm = new FormGroup({
//       firstname: new FormControl('', [
//         Validators.required,
//         Validators.maxLength(40),
//         Validators.pattern('^[a-zA-Z ]*$')
//       ]),
//       lastname: new FormControl('', [
//         Validators.required,
//         Validators.maxLength(40),
//         Validators.pattern('^[a-zA-Z ]*$')
//       ]),
//       email: new FormControl('', [
//       Validators.required,
//       Validators.maxLength(40),
//       Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
//       ]),
//       phone: new FormControl('', [Validators.required,Validators.maxLength(10)])

//   });

//    onSubmit() {
//      {
//       console.log(this.myForm.value)
      
//     } 
//   }

//   constructor(private fb: FormBuilder){}
//   ngOnInit(): void{
//     this.myForm = this.fb.group({
//       firstname: new FormControl('',[Validators.required]),
//       lastname: new FormControl('',[Validators.required]),
//       email: new FormControl('',[Validators.required]),
//       phone: new FormControl('',[Validators.required]),
//       educationdata: this.fb.array([])
//     });
//   }

//   get formControl(){
//     return this.myForm.controls;
//   }  

//    educationdata(): FormArray{
//     return this.myForm.get('educationdata') as FormArray;

//    }

//    neweducationdata(): FormGroup{
//     return this.fb.group({
//       schoolName: new FormControl('',[Validators.required]),
//       degree: new FormControl('',[Validators.required]),
//       fieldofstudy: new FormControl('',[Validators.required]),
//       startDt: new FormControl('',[Validators.required]),
//       endDt: new FormControl('',[Validators.required]),
//       grade: new FormControl('',[Validators.required])
//     });

//    }

//    educationcon(index:string | number){
//     this.educationList = this.myForm.get('educationdata') as FormArray;
//     const formGroup = this.educationList.controls[index] as FormGroup;
//     return FormGroup;
//    }

//    addeducationdata(){
//     this.educationdata().push(this.neweducationdata());
//    }

//    removeeducationdata(i:number){
//     this.educationdata().removeAt(i);
//    }

//   get firstname() { return this.profileForm.get('firstname'); }
//   get lastname() { return this.profileForm.get('lastname'); }
//   get email() { return this.profileForm.get('email'); }
//   get phone() { return this.profileForm.get('phone'); }
//   get schoolName() { return this.profileForm.get('schoolName'); }
//   get degree() { return this.profileForm.get('degree'); }
//   get fieldofstudy() { return this.profileForm.get('fieldofstudy'); }
//   get startDt() { return this.profileForm.get('startDt'); }
//   get endDt() { return this.profileForm.get('endDt'); }
//   get grade() { return this.profileForm.get('grade'); }




   myForm!: FormGroup;
   submittedData: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstname: new FormControl('', [
        Validators.required,
        Validators.maxLength(40),
        Validators.pattern('^[a-zA-Z ]*$')
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.maxLength(40),
        Validators.pattern('^[a-zA-Z ]*$')
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(40),
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
      ]),
      educationdata: this.fb.array([])
    });
  }

  // ---------- Convenience getters ----------
  get firstname() { return this.myForm.get('firstname'); }
  get lastname() { return this.myForm.get('lastname'); }
  get email() { return this.myForm.get('email'); }
  get phone() { return this.myForm.get('phone'); }
  get educationdata(): FormArray { return this.myForm.get('educationdata') as FormArray; }

  // ---------- Education array handling ----------
  newEducation(): FormGroup {
    return this.fb.group({
      schoolName: new FormControl('', [Validators.required]),
      degree: new FormControl('', [Validators.required]),
      fieldofstudy: new FormControl('', [Validators.required]),
      startDt: new FormControl('', [Validators.required]),
      endDt: new FormControl('', [Validators.required]),
      grade: new FormControl('', [Validators.required])
    });
  }

  addEducation() {
    this.educationdata.push(this.newEducation());
  }

  removeEducation(i: number) {
    this.educationdata.removeAt(i);
  }

  // ---------- Submit ----------
  onSubmit() {
    if (this.myForm.valid) {
      // Push a copy of the form data to submittedData array
      // Push a copy of the form value
    this.submittedData.push(JSON.parse(JSON.stringify(this.myForm.value)));

    // Reset form and clear education array
    this.myForm.reset();
    while (this.educationdata.length) {
      this.educationdata.removeAt(0);
    }
    }
   }
  }
