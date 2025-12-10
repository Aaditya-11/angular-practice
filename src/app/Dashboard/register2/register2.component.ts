import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertComponent } from '../reusable-component/alert/alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../popup/popup.component';
@Component({
  selector: 'app-register2',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,AlertComponent,MatDialogModule,PopupComponent],
  templateUrl: './register2.component.html',
  styleUrl: './register2.component.css'
})
export class Register2Component {
  constructor(private dialog: MatDialog) {}
    openPopup() {
    this.dialog.open(PopupComponent);
  }

  //  name=new FormControl();
  //   password=new FormControl();
  //   email=new FormControl();
  
  //   displayValue(){
  //     console.log(this.name.value,this.password.value,this.email.value);
  //   }
  
  //   resetValue(){
  //     this.name.setValue('');
  //     this.password.setValue('');
  //     this.email.setValue('');
  //   }


  // in form group use form control name

  profileForm=new FormGroup({
     name:new FormControl('',[Validators.required]),
     password:new FormControl('',[Validators.required,Validators.minLength(5)]),
     age:new FormControl('',[Validators.required,Validators.minLength(3)]),
     email:new FormControl('',[Validators.required,Validators.maxLength(40),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
     gender:new FormControl('',[Validators.required])


  })

  
  onSubmit(){
  // const formData = this.profileForm.value;
  this.dialog.open(PopupComponent, {
      width: '400px',
       data: this.profileForm.value
    });
  }
  

  reset(){
    this.profileForm.setValue({
      name:"",
      password:"",
      age:"",
      email:"",
      gender:""
    })
  }

  get name(){
    return this.profileForm.get('name')
  }

  get a(){
    return this.profileForm.get('password')
  }

  get age(){
    return this.profileForm.get('age')
  }

  get email(){
    return this.profileForm.get('email')
  }

  get gender(){
    return this.profileForm.get('gender')
  }

}
