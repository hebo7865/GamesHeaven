import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeService } from '../../core/services/dark-mode.service';
import { FlowbiteService } from '../../core/services/flowbite.service';
import { CategoriesService } from '../../core/services/categories.service';
import { Subscription } from 'rxjs';
import { IGames } from '../../core/interfaces/igames';

@Component({
  selector: 'app-blank-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './blank-navbar.component.html',
  styleUrl: './blank-navbar.component.scss'
})
export class BlankNavbarComponent implements OnInit, OnDestroy{
  private readonly _FlowbiteService = inject(FlowbiteService);
  private readonly _CategoriesService = inject(CategoriesService)
  _DarkModeService = inject(DarkModeService);
  catSub!:Subscription;
  games:WritableSignal<IGames[]> = signal([{} as IGames])



  categories:string[] = [
    'MMO',
    'MMORPG',
    'Shooter',
    'Strategy',
    'Moba',
    'Battle Royale',
    'Card',
    'Racing',
    'Sports',
    'Social',
    'Fighting',
  ];

  getCategories(cat:string):void{
    this._CategoriesService.getCategory(cat).subscribe({
      next:(res)=>{
        console.log(res);
        this._CategoriesService.games.set(res);
        console.log(this._CategoriesService.games());
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  logout():void{
    localStorage.removeItem('sessionData');
  }

  toggleDarkMode():void{
    this._DarkModeService.updateDarkMode();
  }

  ngOnInit(): void {
    this._FlowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
  }

  ngOnDestroy(): void {
    this.catSub?.unsubscribe()
}

}
