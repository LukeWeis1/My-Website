import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-involvement',
  imports: [CommonModule],
  templateUrl: './involvement.component.html',
  styleUrl: './involvement.component.scss'
})
export class InvolvementComponent {
involvementCards = [
    {
      title: 'Bearcat Coders',
      date: 'January 2025 - Present',
      image: 'assets/images/BearcatCoders.png',
      details: "As a volunteer with Bearcat Coders, I tutor Hughes High School students in computer science courses on a weekly basis, reinforcing core concepts and supporting their academic success through mentorship and academic guidance.",
    },
    {
      title: 'ACM',
      date: 'August 2023 - Present',
      image: 'assets/images/ACM.jpg',
      details: "As a member of the Association for Computing Machinery (ACM), I attend biweekly meetings that feature guest speakers and discussions on a wide range of computer science topics, allowing me to further my knowledge of the field.",
    },
    {
      title: 'UCincyServe',
      date: 'August 2023 - Present',
      image: 'assets/images/UCincyServe.png',
      details: "As a volunteer with UCincyServe, I work with local organizations across the Cincinnati community to support a variety of service initiatives, helping create a positive and meaningful impact through hands-on involvement and outreach.",
    },
    {
      title: 'UC Honors Program',
      date: 'August 2023 - Present',
      image: 'assets/images/Honors.png',
      details: "As a member of the UC Honors Program, I engage in a variety of experiences throughout my college career that broaden my perspective, deepen my understanding of the world, and support my personal and academic growth.",
    }
  ];
}
