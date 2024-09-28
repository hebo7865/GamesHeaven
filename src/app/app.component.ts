import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from './core/services/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GamesHeaven';

  _darkModeService = inject(DarkModeService)
}
