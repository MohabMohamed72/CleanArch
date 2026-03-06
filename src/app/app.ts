import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Team } from "../Team/Presentation/team/team";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Team],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CleanArch');
}
