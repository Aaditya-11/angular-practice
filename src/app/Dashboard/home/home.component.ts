import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortHeader, MatSortModule } from '@angular/material/sort';
import { Employee } from '../../model/Employee';
import { MasterService } from '../../service/master.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlertComponent } from '../reusable-component/alert/alert.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,MatSortHeader,MatSortModule,MatFormFieldModule,MatInputModule,AlertComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  empList: Employee[] = [];
  dataSource = new MatTableDataSource<Employee>();
  displayedColumns: string[] = ['code', 'name', 'address', 'dob', 'salary'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.getAllEmployee();

     // Custom filter logic: search in all fields
  this.dataSource.filterPredicate = (data: Employee, filter: string) => {
    const dataStr = Object.values(data)
      .join(' ')
      .toLowerCase(); // Combine all fields into a single string
    return dataStr.includes(filter); // Return true if any field contains filter text
  };
  }

  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  // Reset paginator to first page after filter
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
  }

  getAllEmployee() {
    this.service.getAll().subscribe((item) => {
      this.empList = item;
      this.dataSource = new MatTableDataSource(this.empList);
      this.dataSource.paginator = this.paginator; // <-- important line
    });
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // ensures it attaches after view loads
  }
}
