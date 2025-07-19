import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit {
  experienceCards = [
    {
      title: 'Software Developer Co-op',
      subtitle: 'London Computer Systems',
      date: 'May 2025 - August 2025',
      image: 'assets/images/LCS.jpg',
      details: [
        'Improved performance and maintainability of Rent Manager Express (RMX) by refactoring and optimizing Angular front-end components and corresponding C# backend controllers and providers, reducing redundant API calls and leveraging existing business logic.',
        'Resolved several bug tickets, contributing to product stability and a smoother user experience.',
        'Refactored legacy code to align with modern best practices, improving scalability and maintainability within an enterprise application.',
        'Collaborated closely with cross-functional teams in an Agile environment, participating in sprint planning, daily stand-ups, and code reviews.'

      ],
      flipped: false,
      heights: { frontHeight: 0, backHeight: 0, maxHeight: 0 }
    },
    {
      title: 'Software QA Co-op',
      subtitle: 'London Computer Systems',
      date: 'August 2024 - January 2025',
      image: 'assets/images/LCS.jpg',
      details: [
        'Reported 130+ bugs and defects, improving software quality and stability.',
        'Wrote 110+ test plans in Xray for Jira, streamlining test coverage and execution.',
        'Developed front-end features in Angular and contributed to back-end development in C#.',
        'Utilized Insomnia for API testing and validation of endpoint functionality.',
        'Conducted bi-weekly website testing to ensure functionality and performance.',
        'Collaborated with a team of 3 QAs and 10+ developers to efficiently find and resolve defects.'
      ],
      flipped: false,
      heights: { frontHeight: 0, backHeight: 0, maxHeight: 0 }
    },
    {
      title: 'Games Supervisor',
      subtitle: 'Kings Island',
      date: 'May 2023 - November 2024',
      image: 'assets/images/KingsIsland.webp',
      details: [
        'Collaborated on a team to supervise 50+ associates consecutively',
        'Processed associate counseling and job terminations and informed associates of those decisions',
        'Led 50+ associates to elevate salesmanship skills and delivered targeted written feedback to 15+ associates',
        'Cooperated with a team of 4 to plan and run 5 associate events in the 2023 season',
        'Conducted interviews and processed 25+ newly hired associates, taught training class to 50+ new associates in 2023'
      ],
      flipped: false,
      heights: { frontHeight: 0, backHeight: 0, maxHeight: 0 }
    }
  ];

  @ViewChildren('frontContent') frontContents!: QueryList<ElementRef>;
  @ViewChildren('backContent') backContents!: QueryList<ElementRef>;

  private observers: MutationObserver[] = [];

  private debouncedCalculate = this.debounce(() => this.calculateHeights(), 50);

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    const elementsToObserve = [
      ...this.frontContents.toArray(),
      ...this.backContents.toArray()
    ];

    elementsToObserve.forEach(elementRef => {
      const observer = new MutationObserver(() => {

        this.debouncedCalculate();
      });

      observer.observe(elementRef.nativeElement, {
        childList: true,
        subtree: true,
        characterData: true
      });

      this.observers.push(observer);
    });
    setTimeout(() => this.debouncedCalculate(), 100);
  }

  ngOnDestroy() {
    this.observers.forEach(observer => observer.disconnect());
  }

  @HostListener('window:resize')
  onResize() {
    this.debouncedCalculate();
  }

  calculateHeights() {

    this.experienceCards.forEach(card => card.heights.maxHeight = 0);

    this.cdr.detectChanges();

    requestAnimationFrame(() => {
      let overallMaxHeight = 0;

      this.backContents.forEach((backEl, index) => {
        const frontEl = this.frontContents.get(index);
        if (frontEl) {
          const frontHeight = frontEl.nativeElement.scrollHeight;
          const backHeight = backEl.nativeElement.scrollHeight;
          const cardMaxHeight = Math.max(frontHeight, backHeight);

          if (cardMaxHeight > overallMaxHeight) {
            overallMaxHeight = cardMaxHeight;
          }
        }
      });

      if (overallMaxHeight > 0) {

        const finalHeight = overallMaxHeight + 60;
        this.experienceCards.forEach(card => {
          card.heights.maxHeight = finalHeight;
        });
        this.cdr.detectChanges();
      }

      if (this.observers.length > 0) {
        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];
      }
    });
  }

  flipCard(card: any) {
    card.flipped = !card.flipped;
  }

  private debounce(func: Function, delay: number) {
    let timeoutId: any;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
}
