import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })), // Initial state
      transition(':enter', [ // When the component is added to the DOM
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ResumeComponent {}