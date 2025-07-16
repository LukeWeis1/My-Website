import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-me',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
userName: string = '';
  userEmail: string = '';
  userMessage: string = '';
  messageSent: boolean = false;

sendEmail(form: NgForm) {
    if (!form.valid) {
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    });
    return; //Stops submission and displays validation errors if invalid form
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
