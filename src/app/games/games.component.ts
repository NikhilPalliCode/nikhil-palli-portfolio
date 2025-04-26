import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  activeGame: string | null = null;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.activeGame = this.router.url.includes('/games/') ? 
        this.router.url.split('/').pop() || null : 
        null;
    });
  }

  closeGame() {
    this.router.navigate(['/games']);
  }
}