import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements AfterViewInit {
  activeSection: string = '';

  ngAfterViewInit() {
    const sections = Array.from(document.querySelectorAll('section'));
  
    const onScroll = () => {
      let closestSection: HTMLElement | null = null;
      let minDistance = Number.POSITIVE_INFINITY;
  
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
  
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section as HTMLElement;
        }
      }
  
      if (closestSection && this.activeSection !== closestSection.id) {
        this.activeSection = closestSection.id;
      }
  
      requestAnimationFrame(onScroll);
    };
  
    requestAnimationFrame(onScroll);
  }
  
  
}
