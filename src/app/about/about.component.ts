import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('slideIn', [
      state('void', style({ transform: 'translateX(-100%)', opacity: 0 })), // Initial state
      transition(':enter', [ // When the component is added to the DOM
        animate('1s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class AboutComponent {}