import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TicTacToeComponent } from '../tic-tac-toe/tic-tac-toe.component'; // Import the Tic-Tac-Toe component

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TicTacToeComponent], // Add TicTacToeComponent here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })), // Initial state
      transition(':enter', [ // When the component is added to the DOM
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {}