import { Component } from '@angular/core';
import { membresData } from './members-data';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css'],
})
export class MembresComponent {
  constructor(private titleService: Title) {}
  ngOnInit() {
    this.titleService.setTitle('members');
  }

  membresData = membresData;

  responsiveOptions: any[] = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '1220px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '1100px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
