import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
@Input() type: string | null = null;
  @Input() types: string = "";  



}
