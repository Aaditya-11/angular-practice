import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input, Output } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { SharedService } from '../../services/shared.service';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, JsonPipe, MatCardModule, MatSnackBarModule, DatePipe],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CoursesComponent>,
    private dataService: SharedService, 
    private snackBar: MatSnackBar
  ) {}

  close() {
    this.dialogRef.close();
  }
  saveData() {
    // Save to service or API
    this.dataService.finalSave(this.data);

    // Close the popup
    this.dialogRef.close();

    // Show success message
    this.snackBar.open('Data saved successfully!', 'OK', {
      duration: 3000, // auto close after 3 sec
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success-snackbar'],
    });
  }

  downloadResume() {
    const file = this.data.job.resume;
    if (!file) return;

    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(url);
  }
}
