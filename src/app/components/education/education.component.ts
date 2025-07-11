import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  activePopup: string | null = null;

  openPopup(popupName: string) {
    this.activePopup = popupName;
  }

  closePopup() {
    this.activePopup = null;
  }
}
