import { Component } from '@angular/core';
import { membresData } from './members-data';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class MembresComponent {
  membresData = membresData;
  
}


