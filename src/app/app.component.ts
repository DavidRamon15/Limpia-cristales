
import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LimpiaCristales';

  currentRoute: string = '';
  scrolled = false;
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  get navbarClasses(): any {
    return {
      'navbar': true,
      'scrolled': this.scrolled,
      'inicio': this.currentRoute === '/principal',
      'default': this.currentRoute !== '/principal'
    };
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 1000;
  }
}
