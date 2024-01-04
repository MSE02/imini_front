import { Component, OnInit } from '@angular/core';
import { membresData } from './members-data';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css'],
})
export class MembresComponent implements OnInit {
  membresData = membresData;

  responsiveOptions: any[] = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '1220px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '1100px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  currentIndex = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.membresData.length) % this.membresData.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.membresData.length;
  }

  ngOnInit() {}
}
