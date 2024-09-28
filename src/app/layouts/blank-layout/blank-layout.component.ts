import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlankNavbarComponent } from '../../components/blank-navbar/blank-navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { DarkModeService } from '../../core/services/dark-mode.service';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, BlankNavbarComponent, CommonModule],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {
  _DarkModeService =  inject(DarkModeService)
}
