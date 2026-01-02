import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedService } from '../../services/shared.service';
import { AlertComponent } from '../reusable-component/alert/alert.component';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-get-api.component',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatLabel,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    AlertComponent,
    MatGridListModule,
    MatProgressBarModule,
  ],
  templateUrl: './get-api.component.component.html',
  styleUrl: './get-api.component.component.css',
})
export class GetApiComponentComponent {
  //////////////////////////////GET
  dataSource: any[] = [];
  store: any[] = [];
  sharedStore: any[] = [];
  sharedStoreData: any[] = [];
  displayedColumns: string[] = [  'ordered',  'approved',  'placed',  'test',  'pending',  'available',  'deliver'];
  isApi: boolean = false;
  isLoading = () => this.isApi;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private sharedService: SharedService
  ) {}
  // getApiExample() {
  //   this.http
  //     .get('https://petstore3.swagger.io/api/v3/store/order')
  //     .subscribe((results: any) => {
  //       this.dataSource = [results];
  //     });
  // }
  getApiExample() {
    this.isApi = true;

    this.http.get('https://jsonplaceholder.typicode.com/users/1').pipe(delay(1500)).subscribe({
      next: (results: any) => {
        this.dataSource = [results];
        this.isApi = false; // stop spinner AFTER data arrives
    },
      error: () => {
        this.isApi = false; // stop spinner on error
      },
    });
  }

  getApiExample2() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        this.store = res;
      });
  }
  getApiSharedServiceExample() {
    this.sharedService.getUsers().subscribe({
      next: (res) => {
        this.sharedStore = res;
        console.log('Data from service:', res);
      },
      error: (err) => {
        console.error('API Error:', err);
      },
    });
  }
  getApiSharedServiceExample2() {
    this.sharedService.getData().subscribe({
      next: (res) => {
        this.sharedStoreData = res;
        console.log('Data from service:', res);
      },
      error: (err) => {
        console.error('API Error:', err);
      },
    });
  }

  ///////////////////////////////POST
  myForm!: FormGroup;
  response: any = null;
  toLocalDateTimeString(date: Date): string {
    const tzOffset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - tzOffset).toISOString().slice(0, 16);
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      id: ['', Validators.required],
      petId: ['', Validators.required],
      quantity: ['', Validators.required],
      shipDate: [this.toLocalDateTimeString(new Date())],
      status: ['', Validators.required],
      complete: [false, Validators.requiredTrue],
    });
  }
  onSubmit() {
    if (this.myForm.invalid) {
      alert('Please fill all required fields correctly!');
      return;
    }
    const body = {
      ...this.myForm.value,
      shipDate: new Date(this.myForm.value.shipDate).toISOString(), // ✅ conversion here
    };
    console.log('data:', body);

    const reqBody = body;
    this.http
      .post('https://petstore3.swagger.io/api/v3/store/order', reqBody)
      .subscribe({
        next: (postResult) => {
          console.log('Response:', postResult);
          this.response = postResult;
          alert('Order posted succesfully');
        },
        error: (error) => {
          console.error('Error:', error);
          alert('Failed to post order.');
        },
      });
  }

  //youtube post :api not working so manually

  deptObj: any = {
    departmentId: '',
    departmentName: '',
    departmentLogo: '',
  };
  deptList: any[] = [
    {
      departmentId: 0,
      departmentName: 'Computer Science',
      departmentLogo: 'cswarrior',
    },
    {
      departmentId: 1,
      departmentName: 'Electronics',
      departmentLogo: 'elezomato',
    },
    {
      departmentId: 2,
      departmentName: 'Electrical',
      departmentLogo: 'thorhunter',
    },
    {
      departmentId: 3,
      departmentName: 'Mechanical',
      departmentLogo: 'majoormech',
    },
    { departmentId: 4, departmentName: 'AI', departmentLogo: 'smartai' },
    {
      departmentId: 5,
      departmentName: 'Instrumental',
      departmentLogo: 'nachaniya',
    },
  ];
  onReset() {
    this.deptObj = {
      departmentId: '',
      departmentName: '',
      departmentLogo: '',
    };
  }
  onSave() {
    // this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((postResult:any)=>{
    // let apiResonse:any ={
    //   "message": "Max 10 Department can be added, Please delete old department then add new",
    //   "result": true,
    //   "data": null
    // }
    //   if(apiResonse.result){
    //       alert("Department created successfully");
    //   }else{
    //     alert(apiResonse.message)
    //   }
    // })

    // Validate fields
    if (
      !this.deptObj.departmentId ||
      !this.deptObj.departmentName ||
      !this.deptObj.departmentLogo
    ) {
      alert('All fields are required!');
      return;
    }
    // ADD OR UPDATE
    if (this.editIndex === null) {
      this.deptList.push({ ...this.deptObj });
    } else {
      this.deptList[this.editIndex] = { ...this.deptObj };
      this.editIndex = null;
    }
    // Reset form
    this.deptObj = {
      departmentId: '',
      departmentName: '',
      departmentLogo: '',
    };
  }
  editIndex: number | null = null;
  onEdit(item: any, index: number) {
    this.deptObj = { ...item }; // Copy row data to form
    this.editIndex = index; // Remember which row is being edited
  }
  onDelete(index: number) {
    this.deptList.splice(index, 1);
  }
}
