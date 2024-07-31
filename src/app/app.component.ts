import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {Router, NavigationEnd, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  menuOption: string = 'home';

  constructor(
    private router: Router
  ){}

  ngOnInit() {
    this.setActiveMenuOption(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveMenuOption(event.urlAfterRedirects);
      }
    });
  }

  setActiveMenuOption(url: string) {
    if (url === '/' || url === '') {
      this.menuOption = 'home';
    } else if (url.includes('/products')) {
      this.menuOption = 'products';
    } else if (url.includes('/contact')) {
      this.menuOption = 'contact';
    }
  }

  onOption(menuOption: string){
    this.menuOption = menuOption
  }

}
