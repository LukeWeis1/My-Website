import { Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HomeComponent } from './components/home/home.component'; // Ensure you have this

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contact-me', component: ContactMeComponent } // Contact Page
];

export const appConfig = {
    providers: [importProvidersFrom(FormsModule)]
};
