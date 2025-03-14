import { Component } from '@angular/core';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        query('.education-item, .experience-item', [
          style({ opacity: 0, transform: 'translateX(-100%)' }),
          stagger('100ms', [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true }) // Make the query optional
      ])
    ])
  ]
})
export class AboutComponent {}