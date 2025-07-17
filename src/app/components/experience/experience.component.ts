import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
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
      flipped: false
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
      flipped: false
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
      flipped: false
    }
  ];

  flipCard(card: any) {
    card.flipped = !card.flipped;
  }
}
