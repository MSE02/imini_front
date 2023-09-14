import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent {
  isScreenSizeLarge = window.innerWidth > 992;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isScreenSizeLarge = window.innerWidth > 992;
  }
}
