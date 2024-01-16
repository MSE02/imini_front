import { Component, AfterViewInit } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit {
  navData = navbarData;

  ngAfterViewInit() {
    const stickyNav = document.getElementById('stickyNav')!;

    let lastScrollTop = 0;

    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        stickyNav.style.top = '-100%';
      } else {
        stickyNav.style.top = '0';
      }

      lastScrollTop = scrollTop;
    }

    window.addEventListener('scroll', handleScroll);
  }
}
