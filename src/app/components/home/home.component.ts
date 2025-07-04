import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import emailjs from '@emailjs/browser';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HeaderComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
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

  //Awards Popup Logic
  activePopup: string | null = null;

  openPopup(popupName: string) {
    this.activePopup = popupName;
  }

  closePopup() {
    this.activePopup = null;
  }


  //Data for experience cards
  experienceCards = [
    {
      title: 'Software Developer Co-op',
      subtitle: 'London Computer Systems',
      date: 'May 2025 - August 2025',
      image: 'assets/images/LCS.jpg',
      details: [
        'Currently in progress'
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

  //Logic for Projects tabs
  selectedTab = 0;

  tabs = [
    { title: 'Personal Website' },
    { title: 'Engineering Lego Robot' },
  ];

  selectTab(index: number) {
    this.selectedTab = index;
  }



  //Data for Involvement Section
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

  //Contact Me Form Code
  userName: string = '';
  userEmail: string = '';
  userMessage: string = '';
  messageSent: boolean = false;

sendEmail(form: NgForm) {
  if (!form.valid) {
    return; // Stops submission if form is invalid
  }

  const templateParams = {
    from_name: this.userName,
    from_email: this.userEmail,
    message: this.userMessage,
  };

  emailjs
    .send('service_gdem8qc', 'template_m56pmft', templateParams, '_4EfJNETeXfZmWGuz')
    .then((response) => {
      console.log('Email sent!', response.status, response.text);
      this.messageSent = true;

      this.userName = '';
      this.userEmail = '';
      this.userMessage = '';
      form.resetForm();

      setTimeout(() => {
        this.messageSent = false;
      }, 3000);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  }
}

