import { Component, ElementRef, ViewChildren, QueryList, HostListener } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  activePopup: string | null = null;
  animationState: { [key: string]: 'show' | 'hide' | '' } = {};

  @ViewChildren('awardWrapper') awardWrappers!: QueryList<ElementRef>;

  togglePopup(popupName: string) {
    if (this.activePopup === popupName) {
      this.animationState[popupName] = 'hide';
      setTimeout(() => {
        this.activePopup = null;
        this.animationState[popupName] = '';
      }, 300);
    } else {
      if (this.activePopup) {
        this.animationState[this.activePopup] = 'hide';
        setTimeout(() => {
          this.activePopup = popupName;
          this.animationState[popupName] = 'show';
        }, 300);
      } else {
        this.activePopup = popupName;
        this.animationState[popupName] = 'show';
      }
    }
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    const clickedInside = this.awardWrappers?.some(wrapper =>
      wrapper.nativeElement.contains(event.target)
    );

    if (!clickedInside && this.activePopup) {
      const closingPopup = this.activePopup;
      this.animationState[closingPopup] = 'hide';
      setTimeout(() => {
        this.activePopup = null;
        this.animationState[closingPopup] = '';
      }, 300);
    }
  }
}
