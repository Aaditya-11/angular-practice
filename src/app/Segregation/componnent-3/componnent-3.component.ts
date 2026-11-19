import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componnent-3',
  standalone: true,
  imports: [RouterOutlet, MatProgressBar, CommonModule, FormsModule],
  templateUrl: './componnent-3.component.html',
  styleUrl: './componnent-3.component.css',
})
export class Componnent3Component {
  loading = true; // show loader initially
  modalType: 'about' | 'help' | 'offers' = 'about';
  ngOnInit(): void {
    // Show progress bar for 15 seconds
    setTimeout(() => {
      this.loading = false; // hide it after 15 seconds
    }, 5000); // 15000 ms = 15 seconds
  }

  openAboutModal(): void {
    this.modalType = 'about';

    const modal = document.getElementById('myModal');

    if (modal != null) {
      modal.style.display = 'block';
    }
  }
  openHelpModal(): void {
    this.modalType = 'help';

    const modal = document.getElementById('myModal');

    if (modal != null) {
      modal.style.display = 'block';
    }
  }
  openOffersModal(): void {
    this.modalType = 'offers';

    const modal = document.getElementById('myModal');

    if (modal != null) {
      modal.style.display = 'block';
    }
  }
  closeModal(): void {
    const modal = document.getElementById('myModal');

    if (modal != null) {
      modal.style.display = 'none';
    }
  }
}
