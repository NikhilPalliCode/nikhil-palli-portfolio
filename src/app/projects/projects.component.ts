import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Reverse Polish Notation Calculator',
      description: 'Built a stack-based algorithm to evaluate mathematical expressions in Reverse Polish Notation, optimizing for efficiency and memory usage.',
      link: 'https://github.com/NikhilPalliCode/rpnCalculator'
    },
    {
      title: 'Angular Quiz Game',
      description: 'Developed an interactive quiz application with dynamic question generation and a timer feature using Angular.',
      link: 'https://github.com/NikhilPalliCode/quiz-app'
    },
    {
      title: 'Tableau Visualizations',
      description: 'Created interactive data visualizations and dashboards using Tableau.',
      link: 'https://public.tableau.com/app/profile/nikhil.palli/vizzes'
    }
  ];
}