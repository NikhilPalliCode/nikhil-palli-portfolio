import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { GamesComponent } from './games/games.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route (Home)
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'game', component: TicTacToeComponent }, // Tic Tac Toe game route
  {
    path: 'games',
    component: GamesComponent,
    children: [
      { path: 'tic-tac-toe', component: TicTacToeComponent}, 
    ]// Nested route for Tic Tac Toe
  },
  { path: '**', redirectTo: '' } // Redirect to Home for unknown routes
];