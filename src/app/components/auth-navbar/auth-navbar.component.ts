import { Component, inject, OnInit } from '@angular/core';
import { DarkModeService } from '../../core/services/dark-mode.service';
import { CommonModule } from '@angular/common';
import { FlowbiteService } from '../../core/services/flowbite.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-auth-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './auth-navbar.component.html',
  styleUrl: './auth-navbar.component.scss'
})
export class AuthNavbarComponent implements OnInit{
  _DarkModeService = inject(DarkModeService)
  private readonly _FlowbiteService = inject(FlowbiteService)

  toggleDarkMode():void{
    this._DarkModeService.updateDarkMode();
    console.log(this._DarkModeService.darkModeSignal());
    
  }

  ngOnInit(): void {
    this._FlowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
  }
}
