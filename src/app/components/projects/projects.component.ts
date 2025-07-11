import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  selectedTab = 0;

  tabs = [
    { title: 'Personal Website' },
    { title: 'Engineering Lego Robot' },
  ];

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
