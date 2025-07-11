import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import emailjs from '@emailjs/browser';
import { FormsModule, NgForm } from '@angular/forms';
import { InvolvementComponent } from "../involvement/involvement.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ExperienceComponent } from "../experience/experience.component";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HeaderComponent, CommonModule, FormsModule, InvolvementComponent, ProjectsComponent, ExperienceComponent],
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


  //Logic for Projects tabs
  



  //Data for Involvement Section
  

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

