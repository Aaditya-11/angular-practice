import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlertComponent } from '../reusable-component/alert/alert.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,AlertComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
// Using ngIf ngFor ngClass ngStyle
hideShowDiv1:boolean = true;
changeColor:string="";
hideShowDiv2:boolean = true;
isColor:boolean = true;
num1:string="";
num2:string="";
// isChecked:boolean=false;
selectedState:string="";

hideButton(){
  this.hideShowDiv1 = false;
}
showButton(){
  this.hideShowDiv1 = true;
}
toggleButton(){
  this.hideShowDiv2 = !this.hideShowDiv2;
}
// onCheckBox(){
//   this.isChecked=!this.isChecked;
// }

cities:string[]=["Mumbai","Banglore","Kolkata","Chennai","Pune"];
count: number = 0;

showNext() {
  if (this.count < this.cities.length) {
    this.count++;
  }

}

studentList:any[]=[
  {studId:12,marks:50,name:'AAA',iscolor:false,city:'Mumbai',isActive:false},
  {studId:24,marks:90,name:'ABA',iscolor:false,city:'Pune',isActive:false},
  {studId:45,marks:29,name:'ABC',iscolor:false,city:'Banglore',isActive:true},
  {studId:56,marks:25,name:'BAB',iscolor:true,city:'Hydrabad',isActive:false},
  {studId:72,marks:32,name:'BAC',iscolor:false,city:'Chennai',isActive:false},
  {studId:78,marks:65,name:'CAC',iscolor:true,city:'Kolkata',isActive:false},
  {studId:98,marks:82,name:'CAB',iscolor:false,city:'Gujarat',isActive:false},
]

greenButton(){
  this.changeColor="bg-success"
}
blueButton(){
  this.changeColor="bg-primary"
}
toggleColor(){
  this.isColor=!this.isColor;
}
constructor(private router:Router){}
goToRegister3(){
this.router.navigateByUrl("/app-componnent-1/register3")
}


// Using @if @else
div1Visible:boolean = false;
hide(){this.div1Visible=false}
show(){this.div1Visible=true}
div2Visible!:boolean;
toggleDiv(){this.div2Visible=!this.div2Visible}
num1OfDiv3:string="";
num2OfDiv3:string="";
selectedStatus:string="";
dayNumber!:number;

}
