import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('bounce', [
      transition(':enter', [
        animate('1s ease-in', keyframes([
          style({ transform: 'scale(0.5)', offset: 0 }),
          style({ transform: 'scale(1.2)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class ContactComponent {
  // Contact information
  contactInfo = {
    email: ['nikhil3997@gmail.com', 'npalli2387@dbu.edu'],
    phone: '+1 (469) 888-0949',
    location: 'Grand Prairie, TX 75052'
  };

  // Social links
  socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nikhil-palli', icon: 'fab fa-linkedin' },
    { name: 'GitHub', url: 'https://github.com/NikhilPalliCode', icon: 'fab fa-github' }
  ];
}