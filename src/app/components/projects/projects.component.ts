import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnDestroy{
  selectedTab = 0;
  isIOS = false;
  isWarehouseRobotPdfVisible = false;

  tabs = [
    { title: 'Personal Website' },
    { title: 'Autonomous Warehouse Robot' },
    { title: 'Autonomous Terrain-Navigating Sorting Robot' },
  ];

  constructor() {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    this.isIOS = /iPad|iPhone|iPod/.test(userAgent)
    || (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document);
  }

  togglePdfVisibility(): void {
    this.isWarehouseRobotPdfVisible = !this.isWarehouseRobotPdfVisible;
    if (this.isWarehouseRobotPdfVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  selectTab(index: number) {
    this.selectedTab = index;
  }

  ngOnDestroy(): void {
    if(this.isWarehouseRobotPdfVisible){
      document.body.classList.remove('no-scroll');
    }
  }
}
