import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';
import { CommonModule } from '@angular/common';

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
    "> Welcome to the Future_",
    "“Talk is cheap. Let's code.”"
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.vantaEffect = GLOBE({
        el: "#vanta",
        THREE: THREE
      });

      this.animateLines();
    }
  }

  animateLines() {
    let delay = 0;
    this.allLines.forEach(line => {
      setTimeout(() => this.displayedLines.push(line), delay);
      delay += 1500;
    });
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.vantaEffect) this.vantaEffect.destroy();
    }
  }
}
