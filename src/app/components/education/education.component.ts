import { Component, ElementRef, ViewChildren, QueryList, HostListener } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  activePopup: string | null = null;

  //Collects all award wrappers
  @ViewChildren('awardWrapper') awardWrappers!: QueryList<ElementRef>;

  togglePopup(popupName: string) {
    this.activePopup = this.activePopup === popupName ? null : popupName;
  }

  //Listens for clicks on the whole document so that any click makes award popup disappear
  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    const clickedInside = this.awardWrappers.some(wrapper =>
      wrapper.nativeElement.contains(event.target)
    );

    if (!clickedInside) {
      this.activePopup = null;
    }
  }
}
