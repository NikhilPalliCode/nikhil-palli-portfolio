import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isNavCollapsed = true;
  isMobileView = false;
  currentRoute = '/';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.urlAfterRedirects || event.url;
      if (this.isMobileView) {
        this.isNavCollapsed = true;
      }
    });
  }

  ngOnInit() {
    this.checkViewport();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkViewport();
  }

  checkViewport() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileView = window.innerWidth < 769;
      if (!this.isMobileView) {
        this.isNavCollapsed = false;
      }
    }
  }

  toggleNav() {
    if (this.isMobileView) {
      this.isNavCollapsed = !this.isNavCollapsed;
    }
  }
}