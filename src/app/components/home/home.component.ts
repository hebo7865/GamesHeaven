import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { GamesService } from '../../core/services/games.service';
import { SearchPipe } from '../../core/pipes/search.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterLink, SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{
 
  private readonly _GamesService = inject(GamesService);
  readonly _CategoriesService = inject(CategoriesService);
  gamesSub!:Subscription;
  catSub!:Subscription;
  text:string = '';  

  ngOnInit(): void {
    this._GamesService.getAllGames().subscribe({
      next:(res)=>{
        this._CategoriesService.games.set(res)
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  getCategory(cat:any):void{
    this._CategoriesService.getCategory(cat).subscribe({
      next:(res)=>{
        this._CategoriesService.games.update(res)
      }
    })
  }

  ngOnDestroy(): void {
      this.catSub?.unsubscribe();
      this.gamesSub?.unsubscribe();
  }

}
