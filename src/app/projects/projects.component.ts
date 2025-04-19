import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink], // Add any necessary imports here
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })), // Initial state
      transition(':enter', [ // When the component is added to the DOM
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Reverse Polish Notation Calculator',
      description: 'Built a stack-based algorithm to evaluate mathematical expressions in Reverse Polish Notation, optimizing for efficiency and memory usage.',
      link: 'https://github.com/NikhilPalliCode/rpnCalculator' // Replace with your GitHub link
    },
    {
      title: 'Angular Quiz Game',
      description: 'Developed an interactive quiz application with dynamic question generation and a timer feature using Angular.',
      link: 'https://github.com/NikhilPalliCode/quiz-app' // Replace with your GitHub link
    },
    {
      title: 'Tableau Visualizations',
      description: 'Created interactive data visualizations and dashboards using Tableau.',
      link: 'https://public.tableau.com/app/profile/nikhil.palli/vizzes' // Tableau link
    }
  ];
}