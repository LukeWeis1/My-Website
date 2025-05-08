import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  standalone: true,
  imports:[CommonModule, FormsModule]
})
export class ContactMeComponent {
  userName: string = '';
  userEmail: string = '';
  userMessage: string = '';
  messageSent: boolean = false;

  sendEmail(event: Event) {
    event.preventDefault(); // Prevents page reload

    const templateParams = {
      from_name: this.userName,
      from_email: this.userEmail,
      message: this.userMessage
    };

    emailjs.send('service_gdem8qc', 'template_m56pmft', templateParams, '_4EfJNETeXfZmWGuz')
      .then(response => {
        console.log('Email sent!', response.status, response.text);
        this.messageSent = true; // Show success message

         //Clear input fields
        this.userName = '';
        this.userEmail = '';
        this.userMessage = '';

        setTimeout(() => {
          this.messageSent = false;
        }, 3000);
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
  }
}
