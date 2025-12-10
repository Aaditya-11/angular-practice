import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-componnent-3',
  standalone: true,
  imports: [RouterOutlet,MatProgressBar],
  templateUrl: './componnent-3.component.html',
  styleUrl: './componnent-3.component.css'
})
export class Componnent3Component {
  ngOnInit(): void {
        // Show progress bar for 15 seconds
    setTimeout(() => {
      this.loading = false;   // hide it after 15 seconds
    }, 5000); // 15000 ms = 15 seconds
  }

    loading = true;  // show loader initially

}
