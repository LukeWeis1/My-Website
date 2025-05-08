import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  hasDarkMode = true;

  @Input() activeSection: string = '';

  toggleDarkMode(): void{
    const root = document.documentElement;
    this.hasDarkMode = !this.hasDarkMode
    if (this.hasDarkMode){
      root.style.setProperty("--background-color", "black");
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--header-color", "#383838");
      root.style.setProperty("--link-color", "lightblue");
    }
    else{
      root.style.setProperty("--background-color", "white");
      root.style.setProperty("--text-color", "black");
      root.style.setProperty("--header-color", "#dbdbdb");
      root.style.setProperty("--link-color", "#82c5f2");
    }
  }
}
