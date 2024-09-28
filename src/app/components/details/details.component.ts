import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../../core/services/details.service';
import { Subscription } from 'rxjs';
import { IDetails } from '../../core/interfaces/idetails';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CarouselModule, DatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit, OnDestroy{
  private readonly _DetailsService = inject(DetailsService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  gameDetails:IDetails  = {} as IDetails
  routeSub!:Subscription;
  detailsSub!:Subscription;

  openLink(url:string):void{
    window.open(url);
  }

  ngOnInit(): void {
    this.routeSub = this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        const gameId = param.get('id');
        this.detailsSub = this._DetailsService.gameDetails(gameId).subscribe({
          next:(res)=>{
            this.gameDetails = res
            console.log(res);
          }
        })
      }
    })
  }

  ngOnDestroy(): void {
      this.routeSub?.unsubscribe();
      this.detailsSub?.unsubscribe();
  }
}
