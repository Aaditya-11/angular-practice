import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  vantaEffect: any;
  displayedLines: string[] = [];

  allLines = [
    "> SYSTEM BOOTING...",
    "> User: Aaditya",
    "> Status: Online",
    "> Welcome to the Future",
    "“Talk is cheap. Let's code.”"
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      this.vantaEffect = GLOBE({
        el: "#vanta",
        THREE: THREE
      });

      this.animateLines();

      // Show welcome screen for 5 seconds
      setTimeout(() => {
        this.router.navigate(['/app-componnent-3/app-search']);
      }, 5000);
    }
  }

  animateLines() {
    let delay = 0;

    this.allLines.forEach(line => {
      setTimeout(() => {
        this.displayedLines.push(line);
      }, delay);

      delay += 1000;
    });
  }

  ngOnDestroy(): void {

    if (isPlatformBrowser(this.platformId)) {

      if (this.vantaEffect) {
        this.vantaEffect.destroy();
      }
    }
  }
}