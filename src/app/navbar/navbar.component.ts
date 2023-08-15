import { Component } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navData = navbarData;


}
